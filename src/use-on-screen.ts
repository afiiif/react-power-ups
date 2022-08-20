import { RefObject, useState } from 'react';

import useIntersection from './use-intersection';

/**
 * @deprecated Use `useInview` instead.
 *
 * Tracks an HTML element's visibility on screen.
 *
 * ---
 *
 * @param {boolean} initialIsOnScreen Initial `isOnScreen` state.
 * @param options Options.
 * @param options.root Intersection observer option.
 * @param options.rootMargin Intersection observer option.
 * @param options.threshold Intersection observer option.
 */
export default function useOnScreen<T extends Element = HTMLDivElement>(
  initialIsOnScreen?: boolean,
  options?: IntersectionObserverInit,
): [RefObject<T>, boolean | undefined] {
  const [isOnScreen, setIsOnScreen] = useState(initialIsOnScreen);

  const ref = useIntersection<T>({ onIntersect: setIsOnScreen, ...options });

  return [ref, isOnScreen];
}
