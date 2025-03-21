<script setup lang="ts">
import type {
  IUser,
  IUserWithId,
} from '@/interfaces/IUser';
import { useUsersStore } from '@/stores/users';
import {
  userTypeLDAP,
  userTypes,
} from '@/utils/users';

import { computed, reactive, ref } from 'vue';

interface IProps {
  user: IUserWithId;
}

type TErrors = {
  [K in keyof IUser]: boolean;
};

const props = defineProps<IProps>();

const usersStore = useUsersStore();

const errors = ref<TErrors>({
  label: false,
  type: false,
  login: false,
  password: false,
});

const fields = reactive({
  label: props.user.label,
  type: props.user.type,
  login: props.user.login,
  password: props.user.password,
});

const isUserTypeLDAP = computed(
  () => fields.type === userTypeLDAP
);

const userUpdate = () => {
  const isInvalid = Object.values(
    errors.value
  ).includes(true);

  if (!isInvalid) {
    usersStore.updateUser(props.user.id, fields);
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

  if (!isUserTypeLDAP.value && !fields.password) {
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
  usersStore.deleteUserById(props.user.id);
};
</script>

<template>
  <div class="user-form">
    <div class="user-form__item">
      <ui-textarea
        v-model="fields.label"
        auto-resize
        rows="1"
        size="large"
        style="resize: none"
        class="w-full"
        maxlength="50"
        @blur="handleInputEventBlur"
      />
    </div>
    <div class="user-form__item">
      <ui-select
        v-model="fields.type"
        :options="userTypes"
        placeholder="Выберите тип записи"
        option-value="value"
        size="large"
        class="w-full"
        :invalid="errors.type"
        option-label="name"
        @change="handleSelectEventChange"
      />
    </div>
    <div
      class="user-form__item"
      :class="
        isUserTypeLDAP
          ? 'user-form__item--column2'
          : ''
      "
    >
      <ui-input-text
        v-model="fields.login"
        type="text"
        size="large"
        class="w-full"
        maxlength="100"
        :invalid="errors.login"
        @blur="handleInputEventBlur"
      />
    </div>
    <div
      v-if="!isUserTypeLDAP"
      class="user-form__item"
    >
      <ui-password
        v-model="fields.password"
        type="text"
        toggle-mask
        size="large"
        :feedback="false"
        maxlength="100"
        class="w-full"
        input-class="w-full"
        :invalid="errors.password"
        @blur="handleInputEventBlur"
      />
    </div>
    <div class="user-form__item">
      <ui-button
        icon="pi pi-trash"
        size="large"
        aria-label="Удалить пользователя"
        @click="handleDeleteButtonEventClick"
      />
    </div>
  </div>
</template>

<style lang="scss">
.user-form {
  &__item--column2 {
    grid-column: span 2;
  }
}
</style>
