<script setup lang="ts">
import type { IUserWithId } from '@/interfaces/IUser.ts';

import { useUserForm } from '@/composables/useUserForm';
import { userTypes } from '@/utils/users';

interface IProps {
  user: IUserWithId;
}

const props = defineProps<IProps>();

const {
  fields,
  errors,
  isUserTypeLDAP,
  handleInputEventBlur,
  handleSelectEventChange,
  handleDeleteButtonEventClick,
} = useUserForm(props.user);
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
