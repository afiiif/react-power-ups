import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import useIsomorphicLayoutEffect from './use-isomorphic-layout-effect';
import { isBrowser } from './utils';

type Options<T> = {
  key: string;
  initialValue: T;
  validator?: (data: any) => boolean;
};

function useStorage<T>(
  storage: Storage | false,
  options: Options<T>,
): [T, Dispatch<SetStateAction<T>>] {
  const { key, initialValue, validator } = options;

  const [value, setValue] = useState<T>(initialValue);

  useIsomorphicLayoutEffect(() => {
    try {
      // @ts-ignore
      const savedValue = JSON.parse((storage as Storage).getItem(key));
      if (typeof validator !== 'function' || validator(savedValue)) {
        setValue(savedValue);
      }
    } catch {
      localStorage.removeItem(key);
    }
  }, []);

  useEffect(() => {
    (storage as Storage).setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
}

/**
 * Like `useState` but persisted on `localStorage`, SSG/SSR-friendly.
 *
 * ---
 *
 * @param options Options.
 * @param options.key localStorage key.
 * @param options.initialValue Initial value of the state.
 * @param options.validator Function to validate the saved data.
 */
export function useLocalStorage<T>({ key, initialValue, validator }: Options<T>) {
  return useStorage<T>(isBrowser && localStorage, { key, initialValue, validator });
}

/**
 * Like `useState` but persisted on `sessionStorage`, SSG/SSR-friendly.
 *
 * ---
 *
 * @param options Options.
 * @param options.key sessionStorage key.
 * @param options.initialValue Initial value of the state.
 * @param options.validator Function to validate the saved data.
 */
export function useSessionStorage<T>({ key, initialValue, validator }: Options<T>) {
  return useStorage<T>(isBrowser && sessionStorage, { key, initialValue, validator });
}
