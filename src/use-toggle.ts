import { useReducer } from 'react';

const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === 'boolean' ? nextValue : !state;

export default function useToggle(initialValue = false): [boolean, (nextValue?: any) => void] {
  return useReducer(toggleReducer, initialValue);
}
