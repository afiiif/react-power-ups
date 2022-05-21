import { useRef } from 'react';

import useFirstMount from './use-first-mount';
import { CompareFunction, strictEquals } from './utils';

export default function usePreviousDistinct<T>(
  state: T,
  compareFn: CompareFunction<T> = strictEquals,
) {
  const prevRef = useRef<T>();
  const curRef = useRef<T>(state);
  const isFirstMount = useFirstMount();

  if (!isFirstMount && !compareFn(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }

  return prevRef.current;
}
