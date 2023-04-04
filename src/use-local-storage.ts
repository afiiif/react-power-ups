import { Dispatch, SetStateAction, useState } from 'react';

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';
import useUpdateEffect from './use-update-effect';
import useWindowEvent from './use-window-event';
import { identityFn } from './utils';

type Options<TData, TFallback = TData> = {
  key: string;
  initialValue?: TData | TFallback | null;
  fallbackValue?: TData | TFallback | null;
  storageToStateFn?: (data: TData) => TData | TFallback | null;
};

/**
 * Like `useState` but persisted on `localStorage`.
 *
 * SSG/SSR-friendly.
 *
 * Enhanced with window storage event.
 *
 * •
 *
 * @param options Options.
 * @param options.key localStorage key.
 * @param options.initialValue Initial value of the state.
 * @param options.fallbackValue Fallback value when error parsing the value or null. Default to null.
 * @param options.storageToStateFn Function to determine how local storage data transformed to a state.
 * Default to `(data) => data`. You can add validation here, example `(data) => data.isExpired ? null : data`
 */
export default function useLocalStorage<TData, TFallback = TData>(
  options: Options<TData, TFallback>,
): [TData | TFallback | null, Dispatch<SetStateAction<TData | TFallback | null>>] {
  const { key, initialValue = null, fallbackValue = null, storageToStateFn = identityFn } = options;

  const [value, setValue] = useState<TData | TFallback | null>(initialValue);

  useIsomorphicLayoutEffect(() => {
    const storageData = localStorage.getItem(key);
    if (!storageData) {
      setValue(fallbackValue);
      return;
    }
    try {
      const parsedValue = JSON.parse(storageData) as TData;
      const nextValue = storageToStateFn(parsedValue);
      setValue(nextValue);
    } catch {
      setValue(fallbackValue);
    }
  }, []);

  useWindowEvent('storage', (evt) => {
    if (evt.key !== key) {
      return;
    }
    if (!evt.newValue) {
      setValue(fallbackValue);
      return;
    }
    try {
      const parsedValue = JSON.parse(evt.newValue) as TData;
      const nextValue = storageToStateFn(parsedValue);
      setValue(nextValue);
    } catch {
      setValue(fallbackValue);
    }
  });

  useUpdateEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
