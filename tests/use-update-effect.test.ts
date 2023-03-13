import { renderHook } from '@testing-library/react-hooks';

import { useUpdateEffect } from '../src';

describe('useUpdateEffect', () => {
  it('should not execute the effect on the first mount', () => {
    const effectMock = jest.fn();
    renderHook(() => useUpdateEffect(effectMock));
    expect(effectMock).not.toHaveBeenCalled();
  });

  it('should execute the effect after the first mount', () => {
    const effectMock = jest.fn();
    const { rerender } = renderHook(({ count }) => useUpdateEffect(effectMock, [count]), {
      initialProps: { count: 0 },
    });

    expect(effectMock).not.toHaveBeenCalled();

    rerender({ count: 1 });
    expect(effectMock).toHaveBeenCalledTimes(1);

    rerender({ count: 2 });
    expect(effectMock).toHaveBeenCalledTimes(2);
  });
});
