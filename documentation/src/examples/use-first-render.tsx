import React, { memo } from 'react';
import { useState } from 'react';
import { useFirstRender } from 'react-power-ups';

export function Demo_() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  const isFirst = useFirstRender();

  return (
    <>
      <div className="flex items-center gap-4 pb-6">
        <div className="text-2xl">Count: {count}</div>
        <button onClick={increment} className="btn">
          Increment Count (trigger re-render)
        </button>
      </div>

      <div>First render? {isFirst ? 'Yes' : 'No'}</div>
    </>
  );
}

export const Demo = memo(Demo_);
