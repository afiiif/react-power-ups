import React, { memo } from 'react';
import { useLocalStorage } from 'react-power-ups';

export function DemoSimple_() {
  const [counter, setCounter] = useLocalStorage<number>({
    key: 'my-counter',
    initialValue: 0,
    fallbackValue: 0,
  });

  return (
    <>
      <div className="pb-2">Count: {counter}</div>
      <button
        className="btn bg-[--ifm-color-success-light]"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Increment
      </button>

      <div className="flex flex-wrap gap-2 pt-6">
        <button className="btn" onClick={() => window.location.reload()}>
          Reload window
        </button>
        <button className="btn" onClick={() => localStorage.clear()}>
          Remove data in localStorage
        </button>
      </div>

      <div className="mt-4 text-[--ifm-color-emphasis-700]">
        ℹ️ Try increment on another browser tab, then back to this tab again
      </div>
    </>
  );
}

export const DemoSimple = memo(DemoSimple_);

type StorageData = {
  value: number;
  expiredAt: number;
};

export function DemoAdvanced_() {
  const [data, setData] = useLocalStorage<StorageData>({
    key: 'my-counter-with-expiration',
    initialValue: { value: 1, expiredAt: Date.now() + 30 * 1000 },
    fallbackValue: { value: 1, expiredAt: Date.now() + 30 * 1000 },
    storageToStateFn: (data, { fallbackValue }) => {
      if (data.expiredAt > Date.now()) return data;
      return fallbackValue;
    },
  });

  return (
    <>
      <div>Count: {data.value}</div>
      <div>Will expires in {Math.ceil((data.expiredAt - Date.now()) / 1000)}s</div>

      <div className="pt-2 pb-6">
        <button
          className="btn bg-[--ifm-color-success-light]"
          onClick={() => setData((prev) => ({ ...prev, value: prev.value + 1 }))}
        >
          Increment
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="btn" onClick={() => window.location.reload()}>
          Reload window
        </button>
        <button
          className="btn"
          onClick={() => localStorage.setItem('my-counter-with-expiration', '123')}
        >
          Set localStorage data to an invalid value
        </button>
        <button className="btn" onClick={() => localStorage.clear()}>
          Clear localStorage
        </button>
      </div>
    </>
  );
}

export const DemoAdvanced = memo(DemoAdvanced_);
