<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import { useSound } from '@vueuse/sound';
import { watch } from 'vue';
import {
  Pause,
  Play,
  RotateCcw as Reset,
  Volume2 as VolumeMax,
  VolumeX as VolumeMin,
} from 'lucide-vue-next';
import { useTimer } from '@/composables/useTimer';
import NumberInput from '@/components/NumberInput.vue';
import SoundSelect, { sounds } from '@/components/SoundSelect.vue';

const workMins = useLocalStorage('pomodoro-workMins', 25);
const breakMins = useLocalStorage('pomodoro-breakMins', 5);
const volume = useLocalStorage('pomodoro-volume', 0.5);
const workSoundPath = useLocalStorage('pomodoro-workSound', sounds['chime x3']);
const breakSoundPath = useLocalStorage('pomodoro-breakSound', sounds['chime']);

const workSound = useSound(workSoundPath, { volume });
const breakSound = useSound(breakSoundPath, { volume });
const { formattedTime, phaseText, playing, reset, toggleTimer } = useTimer(
  workMins,
  breakMins,
  workSound,
  breakSound,
);

watch(workSoundPath, () => workSound.play());
watch(breakSoundPath, () => breakSound.play());
</script>

<template>
  <header class="p-6 text-center text-3xl font-light">
    Simple Pomodoro Timer
  </header>

  <main class="mx-auto flex w-72 flex-col items-center gap-y-6 text-center">
    <div class="border-primary flex h-80 w-80 flex-col rounded-full border">
      <span class="mt-16 mb-2">{{ phaseText }}</span>
      <time class="text-8xl font-light tabular-nums">{{ formattedTime }}</time>
      <div class="mx-auto mt-4 flex gap-x-4">
        <button
          class="btn btn-lg btn-circle btn-secondary btn-outline"
          @click="reset()"
        >
          <Reset />
        </button>
        <button
          class="btn btn-lg btn-circle btn-primary"
          @click="toggleTimer()"
        >
          <Pause v-if="playing" />
          <Play v-else class="ml-[3px]" />
        </button>
      </div>
    </div>
    <div class="grid w-full grid-cols-[auto_auto_1fr_auto] items-center gap-2">
      <small />
      <small>mins</small>
      <small>sound</small>
      <small>test</small>

      <label>Work</label>
      <NumberInput v-model="workMins" class="w-14 text-center" />
      <SoundSelect v-model="workSoundPath" class="w-full text-center" />
      <button @click="workSound.play()">
        <Play class="text-secondary ml-1 w-4" />
      </button>

      <label>Break</label>
      <NumberInput v-model="breakMins" class="w-14 text-center" />
      <SoundSelect v-model="breakSoundPath" class="w-full text-center" />
      <button @click="breakSound.play()">
        <Play class="text-secondary ml-1 w-4" />
      </button>
    </div>
    <div class="flex w-full items-center gap-x-2">
      <button @click="volume = Math.max(0, volume - 0.1)">
        <VolumeMin class="text-secondary w-5" stroke-width="1.5" />
      </button>
      <input
        v-model.number="volume"
        type="range"
        class="range text-secondary range-xs [--range-bg:var(--color-gray-200)] [--range-fill:0] [--range-p:0.15rem]"
        min="0"
        max="1"
        step="0.1"
      />
      <button @click="volume = Math.min(1, volume + 0.1)">
        <VolumeMax class="text-secondary w-5" stroke-width="1.5" />
      </button>
    </div>
  </main>

  <footer class="p-3 text-center">
    <a
      href="https://github.com/jay-es/pomodoro-timer"
      target="_blank"
      rel="noopener noreferrer"
    >
      &copy;<span class="underline">jay-es</span>
    </a>
  </footer>
</template>
