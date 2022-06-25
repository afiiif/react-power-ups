import { useEffect, useRef, useState } from 'react';

import { noop } from './utils';

/**
 * Get debounced value.
 *
 * ---
 * @param value Value to be debounced.
 * @param {number} delay Delay in milliseconds.
 * @param {Function} callbackFn Callback function after debounced.
 */
export default function useDebounce<T>(
  value: T,
  delay: number,
  callbackFn: (value: T) => void = noop,
): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const callback = useRef(callbackFn);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      callback.current(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  useEffect(() => {
    callback.current = callbackFn;
  }, [callbackFn]);

  return debouncedValue;
}
