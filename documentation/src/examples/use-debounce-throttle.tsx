import React, { useState } from 'react';
import { useDebounce, useThrottle } from 'react-power-ups';

export function DemoDebounce() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 1000);

  return (
    <section className="p-4 shadow-lg rounded-xl border border-[--ifm-color-emphasis-400] border-solid">
      <h3 className="mb-2">Debounce 1 second</h3>
      <input
        className="input"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div>Keyword: {keyword}</div>
      <div>Debounced keyword: {debouncedKeyword}</div>
    </section>
  );
}

export function DemoThrottle() {
  const [keyword, setKeyword] = useState('');
  const throttledKeyword = useThrottle(keyword, 1000);

  return (
    <section className="p-4 shadow-lg rounded-xl border border-[--ifm-color-emphasis-400] border-solid">
      <h3 className="mb-2">Throttle 1 second</h3>
      <input
        className="input"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div>Keyword: {keyword}</div>
      <div>Throttled keyword: {throttledKeyword}</div>
    </section>
  );
}
