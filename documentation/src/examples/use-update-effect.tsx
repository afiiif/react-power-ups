import React, { memo, useEffect, useState } from 'react';
import { useUpdateEffect } from 'react-power-ups';

export function Demo_() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  useEffect(() => {
    console.log('Hello from useEffect');
  }, [count]);

  useUpdateEffect(() => {
    // This only called when count updated
    console.log('Hello from useUpdateEffect');
  }, [count]);

  return (
    <>
      <div>Count: {count}</div>

      <div className="flex items-center pt-3 gap-4">
        <button className="btn" onClick={increment}>
          Increment
        </button>
        <div>
          ℹ️ <i className="text-[--ifm-color-emphasis-700]">Check the console</i>
        </div>
      </div>
    </>
  );
}

export const Demo = memo(Demo_);
