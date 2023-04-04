import { Dispatch, SetStateAction, useState } from 'react';

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';
import useUpdateEffect from './use-update-effect';
import { identityFn } from './utils';

type Options<TData, TFallback = TData> = {
  key: string;
  initialValue?: TData | TFallback | null;
  fallbackValue?: TData | TFallback | null;
  storageToStateFn?: (data: TData) => TData | TFallback | null;
};

/**
 * Like `useState` but persisted on `sessionStorage`.
 *
 * SSG/SSR-friendly.
 *
 * •
 *
 * @param options Options.
 * @param options.key sessionStorage key.
 * @param options.initialValue Initial value of the state.
 * @param options.fallbackValue Fallback value when error parsing the value or null. Default to null.
 * @param options.storageToStateFn Function to determine how session storage data transformed to a state.
 * Default to `(data) => data`. You can add validation here, example `(data) => data.isExpired ? null : data`
 */
export default function useSessionStorage<TData, TFallback = TData>(
  options: Options<TData, TFallback>,
): [TData | TFallback | null, Dispatch<SetStateAction<TData | TFallback | null>>] {
  const { key, initialValue = null, fallbackValue = null, storageToStateFn = identityFn } = options;

  const [value, setValue] = useState<TData | TFallback | null>(initialValue);

  useIsomorphicLayoutEffect(() => {
    const storageData = sessionStorage.getItem(key);
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

  useUpdateEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
