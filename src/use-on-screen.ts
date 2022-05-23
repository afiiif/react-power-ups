import { RefObject, useState } from 'react';

import useIntersection from './use-intersection';

/**
 * Tracks an HTML element's visibility on screen.
 */
export default function useOnScreen<T extends Element = HTMLDivElement>(
  initialIsOnScreen?: boolean,
  options?: IntersectionObserverInit,
): [RefObject<T>, boolean | undefined] {
  const [isOnScreen, setIsOnScreen] = useState(initialIsOnScreen);

  const ref = useIntersection<T>({ onIntersect: setIsOnScreen, ...options });

  return [ref, isOnScreen];
}
