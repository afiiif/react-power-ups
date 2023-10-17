import { DependencyList, EffectCallback, useEffect } from 'react';

import { useFirstRender } from './use-first-render';

/**
 * Like `useEffect` hook, but skip on first render.
 *
 * •
 *
 * @param {Function} effect Effect callback.
 * @param {Array} deps Dependency array.
 */
export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirstRender = useFirstRender();

  useEffect(() => {
    if (!isFirstRender) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
