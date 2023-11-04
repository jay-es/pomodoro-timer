<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import { useSound } from '@vueuse/sound';
import Pause from '@/assets/pause.svg';
import Play from '@/assets/play.svg';
import Reset from '@/assets/rotate-ccw.svg';
import VolumeMax from '@/assets/volume-2.svg';
import VolumeMin from '@/assets/volume-x.svg';
import { useTimer } from '@/composables/useTimer';
import NumberInput from '@/components/NumberInput.vue';

const workMins = useLocalStorage('pomodoro-workMins', 25);
const breakMins = useLocalStorage('pomodoro-breakMins', 5);
const volume = useLocalStorage('pomodoro-volume', 0.5);
const workSound = useSound('/maou_se_onepoint23.mp3', { volume });
const breakSound = useSound('/maou_se_chime13.mp3', { volume });
const { formattedTime, phaseText, playing, play, pause, reset } = useTimer(
  workMins,
  breakMins,
  workSound,
  breakSound,
);
</script>

<template>
  <header class="p-4 text-center text-3xl font-light">
    Simple Pomodoro Timer
  </header>

  <main class="mx-auto flex w-64 flex-col items-center gap-y-6 text-center">
    <div class="relative grid h-64 w-64 place-items-center rounded-full border">
      <small class="absolute top-16">{{ phaseText }}</small>
      <time class="text-7xl">{{ formattedTime }}</time>
    </div>
    <div class="flex gap-x-4">
      <button class="btn btn-circle btn-secondary btn-outline">
        <Reset @click="reset()" />
      </button>
      <button class="btn btn-circle btn-primary">
        <Pause v-if="playing" @click="pause()" />
        <Play v-else @click="play()" />
      </button>
    </div>
    <div class="grid grid-cols-[1fr_32px_1fr] items-center gap-x-4 gap-y-3">
      <label class="leading-none">Work</label>
      <span />
      <label class="leading-none">Break</label>
      <NumberInput v-model="workMins" class="w-full text-center" />
      <small class="text-sm">mins</small>
      <NumberInput v-model="breakMins" class="w-full text-center" />

      <fieldset class="form-control">
        <select class="select select-bordered select-sm w-full" value="" />
      </fieldset>
      <small class="text-sm">sound</small>
      <fieldset class="form-control">
        <select class="select select-bordered select-sm w-full" value="" />
      </fieldset>
    </div>
    <div class="flex w-full gap-x-2">
      <VolumeMin />
      <input
        v-model="volume"
        type="range"
        class="range range-secondary range-sm grow"
        min="0"
        max="1"
        step="0.1"
      />
      <VolumeMax />
    </div>
  </main>

  <footer class="p-2 text-center">
    <a
      href="https://github.com/jay-es/pomodoro-timer"
      target="_blank"
      rel="noopener noreferrer"
    >
      &copy;<span class="underline">jay-es</span>
    </a>
  </footer>
</template>
