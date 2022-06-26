import { useEffect, useRef, useState } from 'react';

import useUpdateEffect from './use-update-effect';
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

  const callbackFnRef = useRef(callbackFn);

  useEffect(() => {
    callbackFnRef.current = callbackFn;
  }, [callbackFn]);

  useUpdateEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      callbackFnRef.current(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
