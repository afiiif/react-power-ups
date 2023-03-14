import { renderHook } from '@testing-library/react-hooks';

import useIntersection, { Props } from '../src/use-intersection';

describe('useIntersection', () => {
  it('should return a ref', () => {
    const { result } = renderHook(() => useIntersection({}));
    expect(result.current).toHaveProperty('current', null);
  });

  it('should not create an IntersectionObserver if not enabled', () => {
    const observe = jest.fn();
    const disconnect = jest.fn();
    (window as any).IntersectionObserver = jest.fn(() => ({
      observe,
      disconnect,
    }));

    const { result, rerender } = renderHook(({ enabled }) => useIntersection({ enabled }), {
      initialProps: { enabled: false },
    });
    const element = document.createElement('div');
    result.current.current = element;

    expect((window as any).IntersectionObserver).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect((window as any).IntersectionObserver).toHaveBeenCalledTimes(1);
    expect(observe).toHaveBeenCalledTimes(1);
    expect(observe).toHaveBeenCalledWith(expect.any(HTMLDivElement));

    (window as any).IntersectionObserver.mockClear();
    delete (window as any).IntersectionObserver;
  });

  it('should trigger onIntersect, onEnter, and onLeave callbacks when element is intersected', () => {
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
    const onEnter = jest.fn();
    const onLeave = jest.fn();

    const { result, rerender } = renderHook((props: Props) => useIntersection(props), {
      initialProps: { enabled: false },
    });
    const element = document.createElement('div');
    result.current.current = element;

    rerender({ enabled: true, onIntersect, onEnter, onLeave });

    callback([{ isIntersecting: true }]);
    expect(onIntersect).toHaveBeenCalledTimes(1);
    expect(onIntersect).toHaveBeenCalledWith(true, { isIntersecting: true });
    expect(onEnter).toHaveBeenCalledTimes(1);
    expect(onLeave).not.toHaveBeenCalled();

    callback([{ isIntersecting: false }]);
    expect(onIntersect).toHaveBeenCalledTimes(2);
    expect(onIntersect).toHaveBeenCalledWith(false, { isIntersecting: false });
    expect(onEnter).toHaveBeenCalledTimes(1);
    expect(onLeave).toHaveBeenCalledTimes(1);

    (window as any).IntersectionObserver.mockClear();
    delete (window as any).IntersectionObserver;
  });
});
