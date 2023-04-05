import { act, renderHook } from '@testing-library/react-hooks';

import { UseIntersectionProps, useInView } from '../src';

describe('useInView', () => {
  test('should set initial isInView state correctly', () => {
    const { result } = renderHook(() => useInView(true));
    expect(result.current[1]).toBe(true);

    const { result: result2 } = renderHook(() => useInView(false));
    expect(result2.current[1]).toBe(false);
  });

  test('should set isInView state correctly when element enters or leaves viewport', async () => {
    const observe = jest.fn();
    const disconnect = jest.fn();
    let callback: (entries: Partial<IntersectionObserverEntry>[]) => void = () => {};
    (window as any).IntersectionObserver = jest.fn((callbackParam: any) => {
      callback = callbackParam;
      return {
        observe,
        disconnect,
      };
    });

    const onIntersect = jest.fn();
    const onLeave = jest.fn();

    const { result, rerender } = renderHook(
      (props: UseIntersectionProps) => useInView(false, props),
      {
        initialProps: { enabled: false },
      },
    );
    const element = document.createElement('div');
    result.current[0].current = element;

    rerender({ enabled: true, onIntersect, onLeave });

    act(() => {
      callback([{ isIntersecting: true }]);
    });
    expect(result.current[1]).toBe(true);
    expect(onIntersect).toHaveBeenCalledTimes(1);
    expect(onLeave).toHaveBeenCalledTimes(0);

    act(() => {
      callback([{ isIntersecting: false }]);
    });
    expect(result.current[1]).toBe(false);
    expect(onIntersect).toHaveBeenCalledTimes(2);
    expect(onLeave).toHaveBeenCalledTimes(1);

    (window as any).IntersectionObserver.mockClear();
    delete (window as any).IntersectionObserver;
  });
});
