import React, { useState } from 'react';
import { useWindowEvent } from 'react-power-ups';

export function Demo() {
  const [coord, setCoord] = useState<number[]>([]);
  const [key, setKey] = useState('');

  useWindowEvent('click', (evt) => {
    setCoord([evt.clientX, evt.clientY]);
  });

  useWindowEvent('keyup', (evt) => {
    setKey(evt.key);
  });

  return (
    <>
      <div className="text-[--ifm-color-emphasis-700]">ℹ️ Click anywhere or type anything</div>

      <div className="pt-4">
        Last clicked coordinate: {coord[0] ?? '-'}, {coord[1] ?? '-'}
      </div>
      <div>Last pressed key: &quot;{key}&quot;</div>
    </>
  );
}
