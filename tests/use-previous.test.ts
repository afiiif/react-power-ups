import { renderHook } from '@testing-library/react-hooks';

import { usePrevious } from '../src';

describe('usePrevious', () => {
  it('returns undefined on first render', () => {
    const { result } = renderHook(() => usePrevious('test'));
    expect(result.current).toBe(undefined);
  });

  it('returns the previous value on subsequent renders', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 'test' },
    });
    expect(result.current).toBe(undefined);
    rerender({ value: 'updated' });
    expect(result.current).toBe('test');
    rerender({ value: 'updated again' });
    expect(result.current).toBe('updated');
  });
});
