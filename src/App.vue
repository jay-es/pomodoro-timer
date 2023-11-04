<script setup lang="ts">
import Play from '@/assets/play.svg';
import Reset from '@/assets/rotate-ccw.svg';
import VolumeMax from '@/assets/volume-2.svg';
import VolumeMin from '@/assets/volume-x.svg';
</script>

<template>
  <header class="p-4 text-center text-3xl font-light">
    Simple Pomodoro Timer
  </header>

  <main class="mx-auto flex w-64 flex-col items-center gap-y-6 text-center">
    <div class="grid h-64 w-64 place-items-center rounded-full border">
      <time class="text-7xl">00:00</time>
    </div>
    <div class="flex gap-x-4">
      <button class="btn btn-circle btn-secondary btn-outline">
        <Reset />
      </button>
      <button class="btn btn-circle btn-primary">
        <Play />
      </button>
    </div>
    <div class="grid grid-cols-[1fr_32px_1fr] items-center gap-x-4 gap-y-3">
      <label class="leading-none">Work</label>
      <span />
      <label class="leading-none">Break</label>
      <fieldset class="form-control">
        <input
          type="text"
          class="input input-bordered input-sm w-full px-0 text-center"
          :value="25"
        />
      </fieldset>
      <small class="text-sm">mins</small>
      <fieldset class="form-control">
        <input
          type="text"
          class="input input-bordered input-sm w-full px-0 text-center"
          :value="5"
        />
      </fieldset>

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
        type="range"
        class="range range-secondary range-sm grow"
        min="0"
        max="1"
        step="0.1"
        :value="0.5"
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
