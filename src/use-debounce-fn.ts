import { useCallback, useEffect, useRef } from 'react';

export default function useDebounceFn<T extends unknown[]>(
  fn: (...params: T) => void,
  delay: number,
) {
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
