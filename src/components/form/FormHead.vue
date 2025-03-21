<script setup lang="ts">
interface IProps {
  title: string;
  buttonIcon?: string;
  buttonAriaLabel?: string;
}

interface IEmitEvents {
  (e: 'onButtonClick', event: MouseEvent): void;
}
withDefaults(defineProps<IProps>(), {
  buttonIcon: undefined,
  buttonAriaLabel: undefined,
});

const emit = defineEmits<IEmitEvents>();

const handleClick = (event: MouseEvent) => {
  emit('onButtonClick', event);
};
</script>

<template>
  <div class="form-head">
    <div class="form-head__title">
      {{ title }}
    </div>
    <ui-button
      v-if="buttonIcon"
      :icon="buttonIcon"
      :aria-label="buttonAriaLabel"
      @click="handleClick"
    />
  </div>
</template>

<style lang="scss" scoped>
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
</style>
