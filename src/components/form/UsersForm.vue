<script setup lang="ts">
import BaseFormTable from '@/components/form/BaseFormTable.vue';

const tableHeads = [
  'Метки',
  'Тип записи',
  'Логин',
  'Пароль',
];
</script>

<template>
  <base-form-table
    title="Учетные записи"
    button-aria-label="Добавить учетную запись"
    button-icon="pi pi-plus"
    message="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
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
        <div class="form-body__line user-form">
          <div class="user-form__item">
            <ui-textarea
              auto-resize
              rows="1"
              size="large"
              style="resize: none"
              class="w-full"
              maxlength="50"
            />
          </div>
          <div class="user-form__item">
            <ui-select
              :options="[
                {
                  name: 'Локальная запись',
                  value: 'local',
                },
                {
                  name: 'LDAP',
                  value: 'LDAP',
                },
              ]"
              option-label="name"
              option-value="value"
              placeholder="Выберите тип записи"
              size="large"
              class="w-full"
            />
          </div>
          <div class="user-form__item">
            <ui-input-text
              type="text"
              size="large"
              class="w-full"
              maxlength="100"
            />
          </div>
          <div class="user-form__item">
            <ui-password
              type="text"
              toggle-mask
              size="large"
              :feedback="false"
              maxlength="100"
              class="w-full"
              input-class="w-full"
            />
          </div>
          <div class="user-form__item">
            <ui-button
              icon="pi pi-trash"
              size="large"
              aria-label="Удалить пользователя"
            />
          </div>
        </div>
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
