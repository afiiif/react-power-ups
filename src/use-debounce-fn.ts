import { useCallback, useEffect, useRef } from 'react';

/**
 * Debounces a function.
 *
 * ---
 *
 * @param {Function} fn Function to be debounced.
 * @param {number} delay Delay in milliseconds.
 */
export default function useDebounceFn<T extends unknown[]>(
  fn: (...params: T) => void,
  delay: number,
): [(...params: T) => void, () => void] {
  const timeout = useRef<NodeJS.Timeout>();

  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const debouncedFn = useCallback(
    (...params: T) => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        fnRef.current(...params);
      }, delay);
    },
    [delay],
  );

  const clear = useCallback(() => {
    clearTimeout(timeout.current);
  }, []);

  return [debouncedFn, clear];
}
