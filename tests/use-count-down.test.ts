import { act, renderHook } from '@testing-library/react-hooks';

import { useCountDown } from '../src';

jest.useFakeTimers();

describe('useCountDown', () => {
  it('should initialize with the correct timeleft', () => {
    const { result } = renderHook(() => useCountDown());
    const { result: result2 } = renderHook(() => useCountDown({ defaultDuration: 10000 }));

    expect(result.current[0]).toBe(60000);
    expect(result2.current[0]).toBe(10000);
  });

  it('should start countdown on mount if startOnMount is true', () => {
    const { result } = renderHook(() => useCountDown({ startOnMount: true }));
    expect(result.current[0]).toBe(60000);

    act(() => {
      jest.advanceTimersByTime(1024);
    });
    expect(result.current[0]).toBe(59000);
  });

  it('should not start countdown on mount if startOnMount is false', () => {
    const { result } = renderHook(() => useCountDown());
    expect(result.current[0]).toBe(60000);

    act(() => {
      jest.advanceTimersByTime(1024);
    });
    expect(result.current[0]).toBe(60000);
  });

  it('should start, pause, resume, stop, reset, and end the countdown timer', async () => {
    const { result } = renderHook(() => useCountDown({ defaultDuration: 10000, interval: 500 }));

    act(() => {
      result.current[1].start(); // Starts with defaultDuration
      jest.advanceTimersByTime(1024);
    });
    expect(result.current[0]).toBe(9000);

    act(() => {
      result.current[1].pause();
      jest.advanceTimersByTime(5000);
    });
    expect(result.current[0]).toBe(9000);

    act(() => {
      result.current[1].resume();
      jest.advanceTimersByTime(1024);
    });
    expect(result.current[0]).toBe(8000);

    act(() => {
      result.current[1].stop();
    });
    expect(result.current[0]).toBe(0);

    jest.advanceTimersByTime(1024);
    expect(result.current[0]).toBe(0);

    act(() => {
      result.current[1].reset(); // Reset to defaultDuration
    });
    expect(result.current[0]).toBe(10000);

    act(() => {
      result.current[1].start(3000); // Start with custom duration
      jest.advanceTimersByTime(1024);
    });

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(result.current[0]).toBe(0);

    act(() => {
      result.current[1].reset();
    });
    expect(result.current[0]).toBe(3000); // Reset to the custom duration
  });
});
