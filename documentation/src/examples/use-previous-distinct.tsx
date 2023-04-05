import React, { memo, useState } from 'react';
import { usePreviousDistinct } from 'react-power-ups';

export function Demo_() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  const prevCount = usePreviousDistinct(count);

  const [, triggerReRender] = useState(0);

  return (
    <>
      <div>Count: {count}</div>
      <button className="btn mt-1" onClick={increment}>
        Increment
      </button>

      <div className="py-6">Previous count: {prevCount ?? <i>undefined</i>}</div>

      <button className="btn" onClick={() => triggerReRender(Math.random())}>
        Trigger Re-Render
      </button>
    </>
  );
}

export const Demo = memo(Demo_);
