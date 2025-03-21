import { computed, reactive, ref } from 'vue';

import type {
  IUser,
  IUserWithId,
} from '@/interfaces/IUser';
import { useUsersStore } from '@/stores/users';
import { userTypeLDAP } from '@/utils/users';

type TErrors = {
  [K in keyof IUser]: boolean;
};

export const useUserForm = (
  user: IUserWithId
) => {
  const usersStore = useUsersStore();

  const errors = ref<TErrors>({
    label: false,
    type: false,
    login: false,
    password: false,
  });

  const fields = reactive({
    label: user.label,
    type: user.type,
    login: user.login,
    password: user.password,
  });

  const isUserTypeLDAP = computed(
    () => fields.type === userTypeLDAP
  );

  const userUpdate = () => {
    const isInvalid = Object.values(
      errors.value
    ).includes(true);

    if (!isInvalid) {
      usersStore.updateUser(user.id, fields);
    }
  };

  const validateLabels = () => {
    errors.value = {
      label: false,
      type: false,
      login: false,
      password: false,
    };

    if (!fields.type) {
      errors.value.type = true;
    }

    if (!fields.login) {
      errors.value.login = true;
    }

    if (
      !isUserTypeLDAP.value &&
      !fields.password
    ) {
      errors.value.password = true;
    }

    userUpdate();
  };

  const updateUserType = () => {
    if (isUserTypeLDAP.value) {
      fields.password = null;
      errors.value.password = false;
    }

    validateLabels();
  };

  const handleInputEventBlur = () => {
    validateLabels();
  };

  const handleSelectEventChange = () => {
    updateUserType();
  };

  const handleDeleteButtonEventClick = () => {
    usersStore.deleteUserById(user.id);
  };

  return {
    fields,
    errors,
    isUserTypeLDAP,
    updateUserType,
    handleInputEventBlur,
    handleSelectEventChange,
    handleDeleteButtonEventClick,
  };
};
