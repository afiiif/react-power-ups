import { useEffect, useLayoutEffect } from 'react';

import { isBrowser } from './utils';

/**
 * Does exactly same as `useLayoutEffect`, but will use `useEffect` in server side to prevent warning from Next.js
 *
 * The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
 * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
 * `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
 *
 * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
 *
 * If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
 * `componentDidMount` and `componentDidUpdate`.
 */
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
