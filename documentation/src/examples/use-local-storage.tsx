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

type Pet = {
  id: number;
  name: string;
};

export function DemoAdvanced_() {
  const [myPet, setMyPet] = useLocalStorage<Pet, string>({
    key: 'my-pet',
    initialValue: 'Egg',
    fallbackValue: 'Egg',
    storageToStateFn: (data) => {
      const isValidStorageData = typeof data?.id === 'number' && typeof data?.name === 'string';
      if (isValidStorageData) {
        return data;
      }
      return 'Egg';
    },
  });

  return (
    <>
      <div>Pet: {typeof myPet === 'string' ? myPet : myPet?.name}</div>

      <div className="pt-2 pb-6">
        <button
          className="btn bg-[--ifm-color-success-light]"
          onClick={() => setMyPet({ id: 1, name: 'Komodo' })}
        >
          Set state
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="btn" onClick={() => window.location.reload()}>
          Reload window
        </button>
        <button className="btn" onClick={() => localStorage.setItem('my-pet', '123')}>
          Set localStorage data to an invalid value
        </button>
        <button className="btn" onClick={() => localStorage.clear()}>
          Remove data in localStorage
        </button>
      </div>
    </>
  );
}

export const DemoAdvanced = memo(DemoAdvanced_);
