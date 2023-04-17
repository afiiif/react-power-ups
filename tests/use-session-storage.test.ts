import { act, renderHook } from '@testing-library/react-hooks';

import { useSessionStorage } from '../src';

describe('useSessionStorage', () => {
  afterEach(() => {
    sessionStorage.clear();
  });

  it('should set the initial value from session storage if it exists', () => {
    sessionStorage.setItem('myKey', JSON.stringify('myValue'));

    const { result } = renderHook(() =>
      useSessionStorage({ key: 'myKey', initialValue: 'defaultValue' }),
    );

    expect(result.current[0]).toEqual('myValue');
  });

  it('should set the fallback value if the initial value does not exist in session storage', () => {
    const { result } = renderHook(() =>
      useSessionStorage({ key: 'myKey', fallbackValue: 'fallbackValue' }),
    );

    expect(result.current[0]).toEqual('fallbackValue');
  });

  it('should set the fallback value if there is an error parsing the session storage value', () => {
    sessionStorage.setItem('myKey', 'invalidValue');

    const { result } = renderHook(() =>
      useSessionStorage({ key: 'myKey', fallbackValue: 'fallbackValue' }),
    );

    expect(result.current[0]).toEqual('fallbackValue');
  });

  it('should save the value to session storage when it changes', () => {
    const { result } = renderHook(() =>
      useSessionStorage({ key: 'myKey', initialValue: 'myValue' }),
    );

    act(() => {
      result.current[1]('newValue');
    });

    expect(JSON.parse(sessionStorage.getItem('myKey')!)).toEqual('newValue');
  });

  it('should transform the session storage value using the provided function', () => {
    sessionStorage.setItem('myKey', JSON.stringify({ value: 'myValue', expiredAt: 1681774660995 }));

    const { result } = renderHook(() =>
      useSessionStorage<{ value: string; expiredAt: number }>({
        key: 'myKey',
        storageToStateFn: (data) => {
          if (data.expiredAt > Date.now()) return data;
          return { value: 'otherValue', expiredAt: 0 };
        },
      }),
    );

    expect(result.current[0]).toEqual({ value: 'otherValue', expiredAt: 0 });
  });
});
