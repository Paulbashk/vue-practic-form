import type {
  IUser,
  TUser,
} from '@/interfaces/IUser';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import {
  mapUsersObjectToArrayAndFormated,
  userLabelToArray,
} from '@/utils/users';

export const useUsersStore = defineStore(
  'users',
  () => {
    const LOCAL_STORAGE_KEY = 'users';

    const usersOnLocalStorage =
      localStorage.getItem(LOCAL_STORAGE_KEY);

    const users = ref<TUser>(
      usersOnLocalStorage
        ? JSON.parse(usersOnLocalStorage)
        : {}
    );

    const usersArray = computed(() =>
      Object.entries(users.value).map(
        mapUsersObjectToArrayAndFormated
      )
    );

    const saveStorage = () => {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(users.value)
      );
    };

    const createUser = () => {
      const newId = uuidv4();

      users.value = {
        ...users.value,
        [newId]: {
          label: null,
          type: null,
          login: null,
          password: null,
        },
      };
    };

    const updateUser = (
      id: string,
      user: IUser
    ) => {
      const currentUser = users.value[id];

      if (currentUser) {
        const { label, ...otherProps } = user;

        const _updateUser = {
          ...currentUser,
          label: userLabelToArray(label),
          ...otherProps,
        };

        users.value[id] = _updateUser;

        saveStorage();
      }
    };

    const deleteUserById = (id: string) => {
      delete users.value[id];
      saveStorage();
    };

    return {
      usersArray,
      updateUser,
      createUser,
      deleteUserById,
    };
  }
);
