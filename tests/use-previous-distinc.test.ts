import { renderHook } from '@testing-library/react-hooks';

import { usePreviousDistinct } from '../src';

describe('usePreviousDistinct', () => {
  it('returns undefined on first render', () => {
    const { result } = renderHook(() => usePreviousDistinct('test'));
    expect(result.current).toBe(undefined);
  });

  it('returns undefined if the state has not changed', () => {
    const { result, rerender } = renderHook(({ value }) => usePreviousDistinct(value), {
      initialProps: { value: 'test' },
    });
    expect(result.current).toBe(undefined);
    rerender({ value: 'test' });
    expect(result.current).toBe(undefined);
  });

  it('returns the previous value if the state has changed', () => {
    const { result, rerender } = renderHook(({ value }) => usePreviousDistinct(value), {
      initialProps: { value: 'test' },
    });
    expect(result.current).toBe(undefined);
    rerender({ value: 'updated' });
    expect(result.current).toBe('test');
    rerender({ value: 'updated again' });
    expect(result.current).toBe('updated');
    rerender({ value: 'updated again' }); // Same value as before
    expect(result.current).toBe('updated');
  });

  it('uses a custom compare function if provided', () => {
    const compareFn = jest.fn((prev, current) => prev.id === current.id);
    const { result, rerender } = renderHook(({ value }) => usePreviousDistinct(value, compareFn), {
      initialProps: { value: { id: 1 } },
    });

    expect(result.current).toBe(undefined);

    // Update the props to a new object with the same id property
    rerender({ value: { id: 1 } });
    expect(result.current).toBe(undefined);

    // Update the props to a new object with a different id property
    rerender({ value: { id: 2 } });
    expect(result.current).toEqual({ id: 1 });
    expect(compareFn).toHaveBeenCalledTimes(2);
  });
});
