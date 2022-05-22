import { DependencyList, EffectCallback, useEffect } from 'react';

import useFirstMount from './use-first-mount';

export default function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirstMount = useFirstMount();

  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
