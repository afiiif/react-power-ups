import { renderHook } from '@testing-library/react-hooks';

import { useFirstMount } from '../src';

describe('useFirstMount', () => {
  it('returns true on first render', () => {
    const { result } = renderHook(() => useFirstMount());
    expect(result.current).toBe(true);
  });

  it('returns false on subsequent renders', () => {
    const { result, rerender } = renderHook(() => useFirstMount());
    expect(result.current).toBe(true);
    rerender();
    expect(result.current).toBe(false);
    rerender();
    expect(result.current).toBe(false);
  });
});
