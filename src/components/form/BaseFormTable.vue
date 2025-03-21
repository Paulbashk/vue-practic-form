<script setup lang="ts">
import FormHead from '@/components/form/FormHead.vue';
import FormMessage from '@/components/form/FormMessage.vue';

interface IProps {
  title: string;
  buttonAriaLabel?: string;
  buttonIcon?: string;
  buttonClick?: (event: MouseEvent) => void;
  message?: string;
  messageIcon?: string;
}

withDefaults(defineProps<IProps>(), {
  message: undefined,
  buttonAriaLabel: undefined,
  buttonIcon: undefined,
  messageIcon: undefined,
  buttonClick: undefined,
});
</script>

<template>
  <div class="form">
    <form-head
      :title="title"
      :button-aria-label="buttonAriaLabel"
      :button-icon="buttonIcon"
      class="form__head"
      @on-button-click="buttonClick"
    />
    <form-message
      v-if="message"
      :icon="messageIcon"
      :message="message"
      class="form__message"
    />
    <div class="form__body">
      <slot />
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
