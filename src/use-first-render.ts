import { useRef } from 'react';

/**
 * Check if component is just mounted (on first render).
 *
 * Returns `true` if component is just mounted and `false` otherwise.
 */
export function useFirstRender() {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return false;
}
