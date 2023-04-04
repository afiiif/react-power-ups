import { useCallback, useEffect, useRef } from 'react';

/**
 * Throttles a function.
 *
 * •
 *
 * @param {Function} fn Function to be throttled.
 * @param {number} delay Delay in milliseconds.
 */
export default function useThrottleFn<T extends unknown[]>(
  fn: (...params: T) => void,
  delay: number,
): [(...params: T) => void, () => void] {
  const timeout = useRef<NodeJS.Timeout>();
  const nextParams = useRef<T>();

  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const throttledFn = useCallback(
    (...params: T) => {
      nextParams.current = params;
      if (!timeout.current) {
        timeout.current = setTimeout(() => {
          fnRef.current(...(nextParams.current as T));
          timeout.current = undefined;
        }, delay);
      }
    },
    [delay],
  );

  const clear = useCallback(() => {
    clearTimeout(timeout.current);
    timeout.current = undefined;
  }, []);

  return [throttledFn, clear];
}
