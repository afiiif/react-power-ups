# React Power-Ups 🌟

Collection of simple React hooks to speed-up your React app development.

![npm bundle size](https://img.shields.io/bundlephobia/min/react-power-ups)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-power-ups)

## Installation

```sh
npm install react-power-ups
# or with yarn
yarn add react-power-ups
```

## Hooks

[img-demo]: https://img.shields.io/badge/demo-%20%20%20%F0%9F%9A%80-green.svg

- [`useToggle`](./src/use-toggle.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-toggle.tsx&initialpath=/use-toggle)  
  Easily toggle or set a boolean state.

- [`useDebounce`](./src/use-debounce.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-debounce.tsx&initialpath=/use-debounce)  
  Get debounced value.

- [`useDebounceFn`](./src/use-debounce-fn.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-debounce-fn.tsx&initialpath=/use-debounce-fn)  
  Debounces a function.

- [`useIntersection`](./src/use-intersection.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-intersection.tsx&initialpath=/use-intersection)  
  Tracks an HTML element's intersection.

- [`useOnScreen`](./src/use-on-screen.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-on-screen.tsx&initialpath=/use-on-screen)  
  Tracks an HTML element's visibility on screen.

- [`useWindowEvent`](./src/use-window-event.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-window-event.tsx&initialpath=/use-window-event)  
  Add event listener to window.

- [`useCountDown`](./src/use-count-down.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-count-down.tsx&initialpath=/use-count-down)  
  Start, pause, resume, and reset a countdown timer.

- [`useFirstMount`](./src/use-first-mount.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-first-mount.tsx&initialpath=/use-first-mount)  
  Check if component is just mounted (on first render).

- [`useUpdateEffect`](./src/use-update-effect.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-update-effect.tsx&initialpath=/use-update-effect)  
  Like `useEffect` hook, but skip on first mount.

- [`usePrevious`](./src/use-previous.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-previous.tsx&initialpath=/use-previous)  
  Get the previous state or prop based on the value from previous render.

- [`usePreviousDistinct`](./src/use-previous-distinct.ts) [![][img-demo]](https://codesandbox.io/s/github/afiiif/react-power-ups-demo?file=/pages/use-previous-distinct.tsx&initialpath=/use-previous-distinct)  
  Get the previous state or prop based on the comparation with current value.
