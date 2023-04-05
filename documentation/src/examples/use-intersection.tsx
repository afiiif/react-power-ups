import React, { memo } from 'react';
import { useIntersection } from 'react-power-ups';

export function Demo_() {
  const refA = useIntersection({
    onEnter: () => console.log('Element A appeared in page'),
    onLeave: () => console.log('Element A dissappeared from page'),
  });

  const refB = useIntersection<HTMLTextAreaElement>({
    threshold: 0.5,
    onIntersect: (isIntersecting, entry) => {
      console.log('onIntersect triggered', isIntersecting, entry);
    },
  });

  return (
    <div className="max-h-96 overflow-y-auto p-4">
      <div className="absolute top-4 left-4 text-[--ifm-color-emphasis-700]">
        ℹ️ Scroll and check console
      </div>

      <div style={{ height: 700 }} />

      <div ref={refA} className="bg-slate-500 text-white p-3 h-24">
        Element A
      </div>

      <div style={{ height: 700 }} />

      <textarea
        ref={refB}
        defaultValue="Element B (with threshold: 0.5)"
        className="p-3 w-full h-36 rounded-lg border border-slate-500"
      />

      <div style={{ height: 700 }} />
    </div>
  );
}

export const Demo = memo(Demo_);
