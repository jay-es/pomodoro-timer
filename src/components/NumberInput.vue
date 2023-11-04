<script setup lang="ts">
defineProps<{
  modelValue: number;
}>();

const emit = defineEmits<{
  'update:modelValue': [num: number];
}>();

function handleInput(e: Event) {
  if (!(e.target instanceof HTMLInputElement)) {
    throw new Error('the element is not a <input />');
  }

  const num = parseInt(e.target.value, 10);
  if (!isNaN(num)) {
    emit('update:modelValue', num);
  }
}
</script>

<template>
  <input
    :value="modelValue"
    type="text"
    inputmode="numeric"
    pattern="\d*"
    class="input input-bordered input-sm invalid:input-warning"
    @input="handleInput"
  />
</template>
