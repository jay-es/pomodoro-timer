import type { Ref } from 'vue';
import { ref, readonly, computed } from 'vue';
import type { useSound } from '@vueuse/sound';
import { useInterval } from './useInterval';

export function useTimer(
  workMins: Ref<number>,
  breakMins: Ref<number>,
  workSound: ReturnType<typeof useSound>,
  breakSound: ReturnType<typeof useSound>,
) {
  const phase = ref<'work' | 'break'>('work');
  const playing = ref(false);
  const restSec = ref(workMins.value * 60);

  function reset() {
    playing.value = false;
    phase.value = 'work';
    restSec.value = workMins.value * 60;
  }

  function switchPhase() {
    const worked = phase.value === 'work';
    phase.value = worked ? 'break' : 'work';
    restSec.value = (worked ? breakMins.value : workMins.value) * 60;
    (worked ? breakSound : workSound).play();
  }

  useInterval(() => {
    if (!playing.value) return;

    restSec.value -= 1;

    if (restSec.value === 0) {
      switchPhase();
    }
  }, 1000);

  return {
    reset,
    toggleTimer: () => (playing.value = !playing.value),
    playing: readonly(playing),
    formattedTime: computed(() => {
      const pad = (n: number) => n.toString().padStart(2, '0');
      const min = Math.floor(restSec.value / 60);
      const sec = restSec.value % 60;
      return `${pad(min)}:${pad(sec)}`;
    }),
    phaseText: computed(() =>
      phase.value === 'work' ? 'working' : 'breaking',
    ),
  };
}
