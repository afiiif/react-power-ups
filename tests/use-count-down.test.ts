import { act, renderHook } from '@testing-library/react-hooks';

import { useCountDown } from '../src';

jest.useFakeTimers();

describe('useCountDown', () => {
  it('should start with default duration when startOnMount is true', () => {
    const { result } = renderHook(() => useCountDown({ startOnMount: true }));
    expect(result.current[0]).toBe(60000);
  });

  it('should start with 0 duration when startOnMount is false', () => {
    const { result } = renderHook(() => useCountDown());
    expect(result.current[0]).toBe(0);
  });

  it('should start, pause, resume, reset, and end the countdown timer', async () => {
    const { result } = renderHook(() => useCountDown({ defaultDuration: 10000, interval: 500 }));

    act(() => {
      result.current[1].start();
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
      result.current[1].reset();
    });
    expect(result.current[0]).toBe(0);

    act(() => {
      result.current[1].start(3000);
      jest.advanceTimersByTime(1024);
    });
    expect(result.current[0]).toBe(2000);

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(result.current[0]).toBe(0);
  });
});
