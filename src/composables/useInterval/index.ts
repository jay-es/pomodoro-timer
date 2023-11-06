import { onMounted, onUnmounted } from 'vue';

export type WorkerCommands =
  | {
      type: 'start';
      timeout: number;
    }
  | {
      type: 'stop';
    };

export function useInterval(callback: () => void, timeout: number) {
  const worker = new Worker(new URL('./worker.ts', import.meta.url));
  worker.addEventListener('message', callback);

  onMounted(() => {
    worker.postMessage({
      type: 'start',
      timeout,
    } satisfies WorkerCommands);
  });

  onUnmounted(() => {
    worker.postMessage({ type: 'stop' } satisfies WorkerCommands);
  });
}
