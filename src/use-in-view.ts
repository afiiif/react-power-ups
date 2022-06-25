import { RefObject, useState } from 'react';

import useIntersection from './use-intersection';

/**
 * Tracks an HTML element's visibility in viewport.
 *
 * @param {boolean} initialIsInView Initial `isInView` state.
 * @param options Options.
 * @param options.root Intersection observer option.
 * @param options.rootMargin Intersection observer option.
 * @param options.threshold Intersection observer option.
 */
export default function useInView<T extends Element = HTMLDivElement>(
  initialIsInView?: boolean,
  options?: IntersectionObserverInit,
): [RefObject<T>, boolean | undefined] {
  const [isInView, setIsInView] = useState(initialIsInView);

  const ref = useIntersection<T>({ onIntersect: setIsInView, ...options });

  return [ref, isInView];
}
