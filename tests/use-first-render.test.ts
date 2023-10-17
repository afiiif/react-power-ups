import { renderHook } from '@testing-library/react-hooks';

import { useFirstRender } from '../src';

describe('useFirstRender', () => {
  it('returns true on first render', () => {
    const { result } = renderHook(() => useFirstRender());
    expect(result.current).toBe(true);
  });

  it('returns false on subsequent renders', () => {
    const { result, rerender } = renderHook(() => useFirstRender());
    expect(result.current).toBe(true);
    rerender();
    expect(result.current).toBe(false);
    rerender();
    expect(result.current).toBe(false);
  });
});
