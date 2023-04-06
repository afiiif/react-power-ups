import React from 'react';
import { useDebounceFn, useThrottleFn } from 'react-power-ups';

export function DemoDebounce() {
  const [fetchData, cancel] = useDebounceFn((value: string) => {
    console.info(`Fetch data by keyword "${value}" ⏳`);
  }, 1000);

  return (
    <section className="p-4 shadow-lg rounded-xl border border-[--ifm-color-emphasis-400] border-solid">
      <h3 className="mb-2">Debounce 1 second</h3>
      <input className="input mr-3" type="text" onChange={(e) => fetchData(e.target.value)} />
      <button className="btn" onClick={cancel}>
        Cancel
      </button>
    </section>
  );
}

export function DemoThrottle() {
  const [fetchData, cancel] = useThrottleFn((value: string) => {
    console.info(`Fetch data by keyword "${value}" ⏳`);
  }, 1000);

  return (
    <section className="p-4 shadow-lg rounded-xl border border-[--ifm-color-emphasis-400] border-solid">
      <h3 className="mb-2">Throttle 1 second</h3>
      <input className="input mr-3" type="text" onChange={(e) => fetchData(e.target.value)} />
      <button className="btn" onClick={cancel}>
        Cancel
      </button>
    </section>
  );
}
