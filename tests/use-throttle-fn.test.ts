import { renderHook } from '@testing-library/react-hooks';

import { useThrottleFn } from '../src';

jest.useFakeTimers();

describe('useThrottleFn', () => {
  it('should debounce the function', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottleFn(callback, 1000));

    result.current[0]('test');

    expect(callback).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(500);
    result.current[0]('test2');

    expect(callback).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test2');

    jest.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('test2');
  });

  it('should clear the timeout', () => {
    const callback = jest.fn();
    const { result } = renderHook(() => useThrottleFn(callback, 1000));

    result.current[0]('test');
    result.current[1](); // Clear timeout

    jest.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
