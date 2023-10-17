import { useEffect, useRef, useState } from 'react';

import { useUpdateEffect } from './use-update-effect';
import { noop } from './utils';

/**
 * Get throttled value.
 *
 * •
 *
 * @param value Value to be throttled.
 * @param {number} delay Delay in milliseconds.
 * @param {Function} callbackFn Callback function after throttled.
 */
export function useThrottle<T>(value: T, delay: number, callbackFn: (value: T) => void = noop): T {
  const [throttledValue, setThrottledValue] = useState(value);

  const timeout = useRef<NodeJS.Timeout>();
  const nextValue = useRef(value);

  const callbackFnRef = useRef(callbackFn);

  useEffect(() => {
    callbackFnRef.current = callbackFn;
  }, [callbackFn]);

  useUpdateEffect(() => {
    nextValue.current = value;
    if (!timeout.current) {
      timeout.current = setTimeout(() => {
        setThrottledValue(nextValue.current);
        callbackFnRef.current(nextValue.current);
        timeout.current = undefined;
      }, delay);
    }
  }, [value, delay]);

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
      timeout.current = undefined;
    };
  }, []);

  return throttledValue;
}
