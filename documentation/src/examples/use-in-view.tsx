import React, { memo } from 'react';
import { useInView } from 'react-power-ups';

export function Demo_() {
  const [ref, isInView] = useInView(false, {
    onEnter: () => console.log('Element appeared in page'),
    onLeave: () => console.log('Element dissappeared from page'),
  });

  return (
    <div
      className={`max-h-96 overflow-y-auto p-4 ${
        !isInView ? 'bg-slate-900 text-white' : 'bg-white'
      } transition-colors`}
    >
      <div className="absolute top-4 left-4">ℹ️ Scroll down</div>
      <div className="absolute top-12 left-4">
        <span className="text-xl font-semibold">{isInView ? 'Day' : 'Night'}</span>
      </div>

      <div style={{ height: 800 }} />

      <div
        ref={ref}
        className="w-24 h-24 rounded-full bg-yellow-500 flex items-center justify-center mx-auto"
      >
        Sun
      </div>

      <div style={{ height: 800 }} />
    </div>
  );
}

export const Demo = memo(Demo_);
