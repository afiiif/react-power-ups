import { DependencyList, EffectCallback, useEffect } from 'react';

import useFirstMount from './use-first-mount';

/**
 * Like `useEffect` hook, but skip on first mount.
 *
 * ---
 * @param {Function} effect Effect callback.
 * @param {Array} deps Dependency array.
 */
export default function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirstMount = useFirstMount();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
