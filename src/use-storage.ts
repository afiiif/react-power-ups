import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import useFirstMount from './use-first-mount';
import { isBrowser } from './utils';

function useStorage<T>(
  key: string,
  storage?: Storage | false,
): [T | null | undefined, Dispatch<SetStateAction<T | null | undefined>>] {
  const [value, setValue] = useState<T | null>();

  if (!storage) {
    return [value, setValue];
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isFirstMount = useFirstMount();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isFirstMount) {
      const savedValue = storage.getItem(key);
      if (savedValue === null) {
        setValue(null);
      } else {
        try {
          setValue(JSON.parse(savedValue));
        } catch {
          setValue(null);
        }
      }
    } else {
      if (value === undefined) {
        setValue(null);
      } else if (value === null) {
        storage.removeItem(key);
      } else {
        storage.setItem(key, JSON.stringify(value));
      }
    }
  }, [key, value, isFirstMount, storage]);

  return [value, setValue];
}

/**
 * Like `useState` but persisted on `localStorage`, SSG/SSR friendly.
 *
 * The state will be `undefined` at first, since browser storage can't be detected on SSG/SSR.
 *
 * At client side, the state will be updated:
 * - If there is no stored value, the state will be `null`.
 * - If there is an invalid JSON-stringified string in storage, the state will be `null` too.
 * - If there is a valid JSON-stringified string in storage, the state will be updated to the stored value (JSON parsed).
 *
 * To remove the stored value, set state to `null`.
 *
 * ---
 * @param key localStorage key.
 */
export function useLocalStorage<T>(key: string) {
  return useStorage<T>(key, isBrowser && localStorage);
}

/**
 * Like `useState` but persisted on `sessionStorage`, SSG/SSR friendly.
 *
 * The state will be `undefined` at first, since browser storage can't be detected on SSG/SSR.
 *
 * At client side, the state will be updated:
 * - If there is no stored value, the state will be `null`.
 * - If there is an invalid JSON-stringified string in storage, the state will be `null` too.
 * - If there is a valid JSON-stringified string in storage, the state will be updated to the stored value (JSON parsed).
 *
 * To remove the stored value, set state to `null`.
 *
 * ---
 * @param key sessionStorage key.
 */
export function useSessionStorage<T>(key: string) {
  return useStorage<T>(key, isBrowser && sessionStorage);
}
