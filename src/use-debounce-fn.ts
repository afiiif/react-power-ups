import { useCallback, useEffect, useRef } from 'react';

/**
 * Debounces a function.
 *
 * @param {Function} fn Function to be debounced.
 * @param {number} delay Delay in milliseconds.
 */
export default function useDebounceFn<T extends unknown[]>(
  fn: (...params: T) => void,
  delay: number,
): [(...params: T) => void, () => void] {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const callback = useRef(fn);

  const debouncedFn = useCallback(
    (...params: T) => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        callback.current(...params);
      }, delay);
    },
    [delay],
  );

  const clear = useCallback(() => {
    clearTimeout(timeout.current);
  }, []);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  return [debouncedFn, clear];
}
