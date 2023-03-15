import { act, renderHook } from '@testing-library/react-hooks';

import { useThrottle } from '../src';

jest.useFakeTimers();

describe('useThrottle', () => {
  it('should return the initial value', () => {
    const { result } = renderHook(() => useThrottle('initial', 500));

    expect(result.current).toEqual('initial');
  });

  it('should return the updated value after the delay', () => {
    const { result, rerender } = renderHook(({ value }) => useThrottle(value, 1000), {
      initialProps: { value: 'initial' },
    });

    expect(result.current).toEqual('initial');

    rerender({ value: 'updated1' });
    expect(result.current).toEqual('initial');

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toEqual('initial');

    rerender({ value: 'updated2' });
    expect(result.current).toEqual('initial');

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toEqual('updated2');

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toEqual('updated2');
  });

  it('should call the callback function after the delay', () => {
    const mockCallback = jest.fn();
    const { rerender } = renderHook(
      ({ value, delay, callback }) => useThrottle(value, delay, callback),
      {
        initialProps: { value: 'initial', delay: 1000, callback: mockCallback },
      },
    );

    expect(mockCallback).not.toHaveBeenCalled();

    rerender({ value: 'updated', delay: 1000, callback: mockCallback });
    expect(mockCallback).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(mockCallback).toHaveBeenCalledWith('updated');
  });
});
