import { useRef } from 'react';

import useFirstRender from './use-first-render';
import { CompareFunction, strictEquals } from './utils';

/**
 * Get the previous state or prop based on the comparation with current value.
 *
 * •
 *
 * @param state State (or prop).
 * @param compareFn Function to compare current value with previous value (default strict equal).
 */
export default function usePreviousDistinct<T>(
  state: T,
  compareFn: CompareFunction<T> = strictEquals,
) {
  const prevRef = useRef<T>();
  const curRef = useRef<T>(state);
  const isFirstRender = useFirstRender();

  if (!isFirstRender && !compareFn(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
}
