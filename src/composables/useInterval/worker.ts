import type { WorkerCommands } from './index';

let intervalId: ReturnType<typeof setInterval>;

self.addEventListener('message', ({ data }: MessageEvent<WorkerCommands>) => {
  if (data.type === 'start') {
    intervalId = setInterval(() => {
      self.postMessage(null);
    }, data.timeout);
  } else if (data.type === 'stop') {
    clearInterval(intervalId);
  }
});
