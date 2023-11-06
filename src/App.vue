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
const { formattedTime, phaseText, playing, reset, toggleTimer } = useTimer(
  workMins,
  breakMins,
  workSound,
  breakSound,
);
</script>

<template>
  <header class="p-6 text-center text-3xl font-light">
    Simple Pomodoro Timer
  </header>

  <main class="mx-auto flex w-64 flex-col items-center gap-y-6 text-center">
    <div class="relative grid h-64 w-64 place-items-center rounded-full border">
      <small class="absolute top-16">{{ phaseText }}</small>
      <time class="text-7xl tabular-nums">{{ formattedTime }}</time>
    </div>
    <div class="flex gap-x-4">
      <button class="btn btn-circle btn-secondary btn-outline" @click="reset()">
        <Reset />
      </button>
      <button class="btn btn-circle btn-primary" @click="toggleTimer()">
        <Pause v-if="playing" />
        <Play v-else class="ml-[3px]" />
      </button>
    </div>
    <div class="grid w-full grid-cols-[auto_auto_1fr_auto] items-center gap-2">
      <small />
      <small>mins</small>
      <small>sound</small>
      <small>test</small>

      <label>Work</label>
      <NumberInput v-model="workMins" class="w-14 text-center" />
      <select class="select select-bordered select-sm" />
      <button
        class="btn btn-circle btn-ghost btn-xs text-secondary"
        @click="workSound.play()"
      >
        <Play class="ml-0.5 w-4" />
      </button>

      <label>Break</label>
      <NumberInput v-model="breakMins" class="w-14 text-center" />
      <select class="select select-bordered select-sm" />
      <button
        class="btn btn-circle btn-ghost btn-xs text-secondary"
        @click="breakSound.play()"
      >
        <Play class="ml-0.5 w-4" />
      </button>
    </div>
    <div class="flex w-full gap-x-2">
      <button @click="volume = Math.max(0, volume - 0.1)">
        <VolumeMin class="w-5 text-secondary" />
      </button>
      <input
        v-model.number="volume"
        type="range"
        class="range range-secondary range-sm grow"
        min="0"
        max="1"
        step="0.1"
      />
      <button @click="volume = Math.min(1, volume + 0.1)">
        <VolumeMax class="w-5 text-secondary" />
      </button>
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
