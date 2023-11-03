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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-rotate-ccw"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      </button>
      <button class="btn btn-circle btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-play"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-volume-x"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <line x1="22" x2="16" y1="9" y2="15" />
        <line x1="16" x2="22" y1="9" y2="15" />
      </svg>
      <input
        type="range"
        class="range range-secondary range-sm grow"
        min="0"
        max="1"
        step="0.1"
        :value="0.5"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-volume-2"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
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
