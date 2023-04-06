# React Power-Ups 🌟

Collection of simple React hooks to speed-up your React app development.

![npm bundle size](https://img.shields.io/bundlephobia/min/react-power-ups)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-power-ups)

Documentation: https://afiiif.github.io/react-power-ups

## Installation

```sh
npm install react-power-ups
# or with yarn
yarn add react-power-ups
```

## Hooks List

[img-demo]: https://img.shields.io/badge/demo-%20%20%20%F0%9F%9A%80-green.svg

### State 🚥

- [`useToggle`](./src/use-toggle.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-toggle#examples)  
  Easily toggle or set a boolean state.  
  <sup>💡 Common use case: show/hide modal, show/hide password</sup>

- [`useCountDown`](./src/use-count-down.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-count-down#examples)  
  Start, pause, resume, and reset a countdown timer.  
  <sup>💡 Common use case: display a countdown timer, limit certain action within a time frame like resend OTP</sup>

- [`useFirstMount`](./src/use-first-mount.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-first-mount#examples)  
  Check if component is just mounted (on first render).  
  <sup>💡 Common use case: do something only on first render or vice versa</sup>

- [`usePrevious`](./src/use-previous.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-previous#examples)  
  Get the previous state or prop based on the value from previous render.  
  <sup>💡 Common use case: when you need the value of the previous state/prop</sup>

- [`usePreviousDistinct`](./src/use-previous-distinct.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-previous-distinct#examples)  
  Get the previous state or prop based on the comparation with current value.  
  <sup>💡 Common use case: when you need the value of the previous state/prop</sup>

- [`useUpdateEffect`](./src/use-update-effect.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-update-effect#examples)  
  Like `useEffect` hook, but skip on first mount.  
  <sup>💡 Common use case: do something when a state updated</sup>

- [`useIsomorphicLayoutEffect`](./src/use-isomorphic-layout-effect.ts)  
  Same as `useLayoutEffect`, but will not show warning in Next.js.

### Event 🗓

- [`useIntersection`](./src/use-intersection.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-intersection#examples)  
  Tracks an HTML element's intersection.  
  <sup>💡 Common use case: detect if user has reached the bottom of page to load more data (infinite scroll)</sup>

- [`useInView`](./src/use-in-view.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-in-view#examples)  
  Tracks an HTML element's visibility on screen or a specified element.  
  <sup>💡 Common use case: display something differently depending on whether an element is visible on screen or not</sup>

- [`useWindowEvent`](./src/use-window-event.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-window-event#examples)  
  Add event listener to window.  
  <sup>💡 Common use case: do something when window received a post-message, user switch tab (window blur event), and many more</sup>

### Optimization 🚀

- [`useDebounce`](./src/use-debounce.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-debounce#examples)  
  Get debounced value.  
  <sup>💡 Common use case: limit state update to prevent calling API multiple times</sup>

- [`useDebounceFn`](./src/use-debounce-fn.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-debounce-fn#examples)  
  Debounces a function.  
  <sup>💡 Common use case: limit the times a function is called, like limiting API call function when user is typing</sup>

- [`useThrottle`](./src/use-throttle.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-throttle#examples)  
  Get throttled value.  
  <sup>💡 Common use case: limit state update to prevent calling API multiple times</sup>

- [`useThrottleFn`](./src/use-throttle-fn.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-throttle-fn#examples)  
  Throttles a function.  
  <sup>💡 Common use case: limit the times a function is called, like limiting API call function when user is typing</sup>

### Storage 🗄

- [`useLocalStorage`](./src/use-local-storage.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-local-storage#examples)  
  Like `useState` but persisted on `localStorage`, SSG/SSR-friendly.  
  <sup>💡 Common use case: manage theme, language, etc.</sup>

- [`useSessionStorage`](./src/use-session-storage.ts) [![][img-demo]](https://afiiif.github.io/react-power-ups/docs/use-session-storage#examples)  
  Like `useState` but persisted on `sessionStorage`, SSG/SSR-friendly.  
  <sup>💡 Common use case: manage temporary value</sup>
