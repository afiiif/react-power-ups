import { useEffect, useRef } from 'react';

import { noop } from './utils';

type Props = {
  onIntersect?: (isIntersecting: boolean, entry?: IntersectionObserverEntry) => void;
  onEnter?: (entry?: IntersectionObserverEntry) => void;
  onLeave?: (entry?: IntersectionObserverEntry) => void;
  options?: IntersectionObserverInit;
};

export default function useIntersection<T extends Element = HTMLDivElement>({
  onIntersect = noop,
  onEnter = noop,
  onLeave = noop,
  options,
}: Props) {
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
    if (ref.current && typeof IntersectionObserver === 'function') {
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
  }, [options]);

  return ref;
}
