import { act, renderHook } from '@testing-library/react-hooks';

import { useToggle } from '../src';

describe('useToggle', () => {
  it('should return initial value and toggle function', () => {
    const { result } = renderHook(() => useToggle(true));
    const [value, toggle] = result.current;

    expect(value).toBe(true);
    expect(typeof toggle).toBe('function');
  });

  it('should return false by default', () => {
    const { result } = renderHook(() => useToggle());
    const [value] = result.current;

    expect(value).toBe(false);
  });

  it('should toggle the value when called with no arguments', () => {
    const { result } = renderHook(() => useToggle(true));
    const [, toggle] = result.current;

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(false);

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(true);
  });

  it('should set the value when called with an argument', () => {
    const { result } = renderHook(() => useToggle());
    const [, toggle] = result.current;

    act(() => {
      toggle(true);
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      toggle(false);
    });

    expect(result.current[0]).toBe(false);
  });
});
