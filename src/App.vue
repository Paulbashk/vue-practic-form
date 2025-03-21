<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="form">
      <div class="form__head form-head">
        <div class="form-head__title">
          Учетные записи
        </div>
        <ui-button
          icon="pi pi-plus"
          aria-label="Добавить учетную запись"
        />
      </div>
      <div class="form__message form-message">
        <i
          class="pi pi-question-circle"
          style="font-size: 2rem"
        />
        <span>
          Для указания нескольких меток для одной
          пары логин/пароль используйте
          разделитель ;
        </span>
      </div>
      <div class="form__body">
        <div class="form-body">
          <div class="form-body__line">
            <div class="form-body__item">
              <div class="form-body__item-title">
                Метки
              </div>
            </div>
            <div class="form-body__item">
              <div class="form-body__item-title">
                Тип записи
              </div>
            </div>
            <div class="form-body__item">
              <div class="form-body__item-title">
                Логин
              </div>
            </div>
            <div class="form-body__item">
              <div class="form-body__item-title">
                Пароль
              </div>
            </div>
          </div>
          <div class="form-body__content">
            <div
              class="form-body__line user-form"
            >
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

.form-head {
  display: flex;
  align-items: center;
  column-gap: 16px;

  &__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
  }
}

.form-message {
  background-color: #eef4fa;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 4px;
}

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

.user-form {
  &__item--column2 {
    grid-column: span 2;
  }
}
</style>
