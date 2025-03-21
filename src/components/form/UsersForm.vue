<script setup lang="ts">
import BaseFormTable from '@/components/form/BaseFormTable.vue';
import UserForm from '@/components/form/UserForm.vue';

import { useUsersStore } from '@/stores/users';

const tableHeads = [
  'Метки',
  'Тип записи',
  'Логин',
  'Пароль',
];

const usersStore = useUsersStore();
</script>

<template>
  <base-form-table
    title="Учетные записи"
    button-aria-label="Добавить учетную запись"
    button-icon="pi pi-plus"
    message="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
    :button-click="usersStore.createUser"
  >
    <div class="form-body">
      <div class="form-body__line">
        <div
          v-for="itemTable in tableHeads"
          :key="itemTable"
          class="form-body__item"
        >
          <div class="form-body__item-title">
            {{ itemTable }}
          </div>
        </div>
      </div>
      <div class="form-body__content">
        <user-form
          v-for="user in usersStore.usersArray"
          :key="user.id"
          :user="user"
          class="form-body__line"
        />
      </div>
    </div>
  </base-form-table>
</template>

<style lang="scss" scoped>
.form-body {
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  &__line {
    display: grid;
    grid-template-columns: 1fr 180px 1fr 1fr 40px;
    column-gap: 16px;
  }

  &__item-title {
    font-size: 16px;
    line-height: 24px;
    color: #a8a8a8;
  }
}
</style>
