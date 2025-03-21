<script setup lang="ts">
interface IProps {
  message: string;
  icon?: string;
}

withDefaults(defineProps<IProps>(), {
  icon: 'pi pi-question-circle',
});
</script>

<template>
  <div class="form-message">
    <i
      v-if="icon"
      :class="icon"
      style="font-size: 2rem"
    />
    <span>
      {{ message }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.form-message {
  background-color: #eef4fa;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 4px;
}
</style>
