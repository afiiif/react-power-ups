import { RefObject, useCallback, useState } from 'react';

import useIntersection, { Props } from './use-intersection';
import { noop } from './utils';

/**
 * Tracks an HTML element's visibility in viewport.
 *
 * ---
 * @param {boolean} initialIsInView Initial `isInView` state.
 * @param options Options.
 * @param options.root Intersection observer option.
 * @param options.rootMargin Intersection observer option.
 * @param options.threshold Intersection observer option.
 * @param {Function} options.onIntersect Callback fired on enter & leave.
 * @param {Function} options.onEnter Callback fired on enter.
 * @param {Function} options.onLeave Callback fired on leave.
 * @param {boolean} [options.enabled=true] Enable intersection observer (default `true`).
 */
export default function useInView<T extends Element = HTMLDivElement>(
  initialIsInView?: boolean,
  options: IntersectionObserverInit & Props = {},
): [RefObject<T>, boolean | undefined] {
  const { onIntersect = noop, ...restOptions } = options;

  const [isInView, setIsInView] = useState(initialIsInView);

  const onIntersectFinal = useCallback(
    (isIntersecting: boolean, entry?: IntersectionObserverEntry) => {
      setIsInView(isIntersecting);
      onIntersect(isIntersecting, entry);
    },
    [onIntersect],
  );

  const ref = useIntersection<T>({ onIntersect: onIntersectFinal, ...restOptions });

  return [ref, isInView];
}
