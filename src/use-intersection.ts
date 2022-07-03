import { useEffect, useRef } from 'react';

import { noop } from './utils';

type Props = {
  onIntersect?: (isIntersecting: boolean, entry?: IntersectionObserverEntry) => void;
  onEnter?: (entry?: IntersectionObserverEntry) => void;
  onLeave?: (entry?: IntersectionObserverEntry) => void;
  enabled?: boolean;
};

/**
 * Tracks an HTML element's intersection.
 *
 * ---
 * @param options Options.
 * @param {Function} options.onIntersect Callback fired on enter & leave.
 * @param {Function} options.onEnter Callback fired on enter.
 * @param {Function} options.onLeave Callback fired on leave.
 * @param {boolean} [options.enabled=true] Enable intersection observer (default `true`).
 * @param options.root Intersection observer option.
 * @param options.rootMargin Intersection observer option.
 * @param options.threshold Intersection observer option.
 */
export default function useIntersection<T extends Element = HTMLDivElement>({
  onIntersect = noop,
  onEnter = noop,
  onLeave = noop,
  enabled = true,
  ...options
}: Props & IntersectionObserverInit) {
  const ref = useRef<T>(null);

  const onIntersectRef = useRef(onIntersect);
  const onEnterRef = useRef(onEnter);
  const onLeaveRef = useRef(onLeave);

  useEffect(() => {
    onIntersectRef.current = onIntersect;
  }, [onIntersect]);

  useEffect(() => {
    onEnterRef.current = onEnter;
  }, [onEnter]);

  useEffect(() => {
    onLeaveRef.current = onLeave;
  }, [onLeave]);

  useEffect(() => {
    if (enabled && ref.current && typeof IntersectionObserver === 'function') {
      const observer = new IntersectionObserver(([entry]) => {
        onIntersectRef.current(entry.isIntersecting, entry);
        if (entry.isIntersecting) onEnterRef.current(entry);
        else onLeaveRef.current(entry);
      }, options);

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, options.root, options.rootMargin, options.threshold]);

  return ref;
}
