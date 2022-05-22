import { useEffect, useRef, useState } from 'react';

import { noop } from './utils';

/**
 * Get debounced value.
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
