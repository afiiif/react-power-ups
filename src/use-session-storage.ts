import { Dispatch, SetStateAction, useState } from 'react';

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';
import useUpdateEffect from './use-update-effect';
import { identityFn } from './utils';

type Options<TData> = {
  key: string;
  initialValue?: TData | null;
  fallbackValue?: TData | null;
  storageToStateFn?: (
    data: TData,
    alternativeValue: { initialValue: TData | null; fallbackValue: TData | null },
  ) => TData | null;
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
 * Default to `(data) => data`. You can add validation here, example `(data) => isExpired ? null : data`
 */
export default function useSessionStorage<TData>(
  options: Options<TData>,
): [TData | null, Dispatch<SetStateAction<TData | null>>] {
  const { key, initialValue = null, fallbackValue = null, storageToStateFn = identityFn } = options;

  const [value, setValue] = useState<TData | null>(initialValue);

  useIsomorphicLayoutEffect(() => {
    const storageData = sessionStorage.getItem(key);
    if (!storageData) {
      setValue(fallbackValue);
      return;
    }
    try {
      const parsedValue = JSON.parse(storageData) as TData;
      const nextValue = storageToStateFn(parsedValue, { initialValue, fallbackValue });
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
