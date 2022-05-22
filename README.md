# React Power-Ups

🌟 Collection of simple React hooks to speed-up your React app development.

It's like [react-use](https://github.com/streamich/react-use) library, but...

- Some of hooks have different API
- There are some additional hooks (which is currently not available in `react-use`)
- Doesn't include all hooks from `react-use`

## Installation

```sh
npm install react-power-ups
# or with yarn
yarn add react-power-ups
```

## Hooks

- [`useFirstMount`](./src/use-first-mount.ts) &mdash; Check if component is just mounted (on first render).
- [`useUpdateEffect`](./src/use-update-effect.ts) &mdash; Like `useEffect` hook, but skip on first mount.
- [`usePrevious`](./src/use-previous.ts) &mdash; Get the previous state or prop based on the previous render.
- [`usePreviousDistinct`](./src/use-previous-distinct.ts) &mdash; Get the previous state or prop based on the previous value.
- [`useToggle`](./src/use-toggle.ts) &mdash; Easily toggle or set a boolean state.
- [`useDebounce`](./src/use-debounce.ts) &mdash; Get debounced value.
- [`useDebounceFn`](./src/use-debounce-fn.ts) &mdash; Debounces a function.
- [`useIntersection`](./src/use-intersection.ts) &mdash; Tracks an HTML element's intersection.
- [`useOnScreen`](./src/use-on-screen.ts) &mdash; Tracks an HTML element's visibility on screen.
- [`useWindowEvent`](./src/use-window-event.ts) &mdash; Add event listener to window.
