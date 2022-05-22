import { RefObject, useState } from 'react';

import useIntersection from './use-intersection';

export default function useOnScreen<T extends Element = HTMLDivElement>(
  initialIsOnScreen?: boolean,
  options?: IntersectionObserverInit,
): [RefObject<T>, boolean | undefined] {
  const [isOnScreen, setIsOnScreen] = useState(initialIsOnScreen);

  const ref = useIntersection<T>({ onIntersect: setIsOnScreen, options });

  return [ref, isOnScreen];
}
