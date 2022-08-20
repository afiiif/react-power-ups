import { useEffect, useRef } from 'react';

/**
 * Get the previous state or prop based on the value from previous render.
 *
 * ---
 *
 * @param state State (or prop).
 */
export default function usePrevious<T>(state: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
}
