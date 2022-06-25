import { useEffect, useRef } from 'react';

/**
 * Add event listener to window.
 *
 * ---
 * @param {string} eventType Window event type (e.g. 'click', 'keyup').
 * @param {Function} handler Handler function.
 */
export default function useWindowEvent<T extends keyof WindowEventMap>(
  eventType: T,
  handler: (ev: WindowEventMap[T]) => any,
) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (e: WindowEventMap[T]) => handlerRef.current(e);
    window.addEventListener(eventType, listener);
    return () => window.removeEventListener(eventType, listener);
  }, [eventType]);
}
