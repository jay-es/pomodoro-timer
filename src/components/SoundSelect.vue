<script lang="ts">
export const sounds = {
  chime: '/maou_se_chime10.mp3',
  'chime x3': '/maou_se_chime11.mp3',
  'chime hi': '/maou_se_chime13.mp3',
  'jingle long': '/maou_se_jingle03.mp3',
  'jingle short': '/maou_se_onepoint23.mp3',
  bell: '/maou_se_sound_phone03.mp3',
} as const;
</script>

<script setup lang="ts">
const modelValue = defineModel<string>({ required: true });
</script>

<template>
  <select v-model="modelValue" class="select select-bordered select-sm">
    <option v-for="(v, k) in sounds" :key="k" :value="v">{{ k }}</option>
  </select>
</template>
