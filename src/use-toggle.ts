import { useReducer } from 'react';

const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === 'boolean' ? nextValue : !state;

/**
 * Easily toggle or set a boolean state.
 *
 * •
 *
 * @param {boolean} [initialValue=false] Initial state (default `false`).
 */
export default function useToggle(initialValue = false): [boolean, (nextValue?: any) => void] {
  return useReducer(toggleReducer, initialValue);
}
