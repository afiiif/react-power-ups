import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

type CountDownOptions = {
  defaultDuration: number;
  interval: number;
  callback: Dispatch<SetStateAction<number>>;
};

function countDown({ defaultDuration, interval, callback }: CountDownOptions) {
  let duration: number;
  let startTime: number | null = null;
  let timeLeft: number;
  let intervaledTimeLeft: number;
  let lastInterval: number;

  let requestId: number = 0;

  const cancel = () => {
    window.cancelAnimationFrame(requestId);
  };

  const run = (rafTime: DOMHighResTimeStamp) => {
    if (!startTime) {
      startTime = rafTime;
      lastInterval = rafTime;
    }

    const elapsedTimeFromBeginning = rafTime - startTime;
    const elapsedTimeFromLastInterval = rafTime - lastInterval;

    timeLeft = duration - elapsedTimeFromBeginning;

    const checkPoint = Math.min(interval, intervaledTimeLeft || Infinity);

    if (elapsedTimeFromLastInterval >= checkPoint) {
      lastInterval += checkPoint;
      callback((prev) => {
        intervaledTimeLeft = prev - checkPoint;
        return intervaledTimeLeft;
      });
    }

    if (timeLeft > 0) {
      requestId = window.requestAnimationFrame(run);
    } else {
      callback(0);
    }
  };

  const start = (durationParam = defaultDuration) => {
    cancel();
    duration = durationParam;
    startTime = null;
    requestId = window.requestAnimationFrame(run);
    callback(durationParam);
  };

  const pause = () => {
    cancel();
    startTime = null;
    duration = timeLeft;
  };

  const resume = () => {
    cancel();
    requestId = window.requestAnimationFrame(run);
  };

  const reset = () => {
    cancel();
    callback(0);
  };

  return { start, pause, resume, reset, cancel };
}

type Options = {
  defaultDuration?: number;
  interval?: number;
  startOnMount?: boolean;
};

type Actions = {
  start: (duration?: number) => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
};

/**
 * Start, pause, resume, and reset a countdown timer.
 */
export default function useCountDown({
  defaultDuration = 60 * 1000,
  interval = 1000,
  startOnMount = false,
}: Options = {}): [number, Actions] {
  const [timeLeft, setTimeLeft] = useState(startOnMount ? defaultDuration : 0);

  const { cancel, ...restActions } = useMemo(
    () => countDown({ defaultDuration, interval, callback: setTimeLeft }),
    [defaultDuration, interval],
  );

  const actions = useMemo(() => restActions, [defaultDuration, interval]);

  useEffect(() => cancel, [defaultDuration, interval]);

  useEffect(() => {
    if (startOnMount) {
      actions.start();
    }
  }, []);

  return [timeLeft, actions];
}
