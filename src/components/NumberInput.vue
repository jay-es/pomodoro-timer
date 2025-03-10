<script setup lang="ts">
const [modelValue] = defineModel<number>({
  required: true,
  set(value) {
    const num = parseInt(value as any, 10);
    return num > 0 ? num : modelValue.value;
  },
});
</script>

<template>
  <input
    v-model="modelValue"
    type="text"
    inputmode="numeric"
    pattern="[1-9]\d*"
    required
    class="input invalid:input-warning"
  />
</template>
