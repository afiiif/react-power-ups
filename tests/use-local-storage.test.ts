import { act, renderHook } from '@testing-library/react-hooks';

import { useLocalStorage } from '../src';

describe('useLocalStorage', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should set the initial value from local storage if it exists', () => {
    localStorage.setItem('myKey', JSON.stringify('myValue'));

    const { result } = renderHook(() =>
      useLocalStorage({ key: 'myKey', initialValue: 'defaultValue' }),
    );

    expect(result.current[0]).toEqual('myValue');
  });

  it('should set the fallback value if the initial value does not exist in local storage', () => {
    const { result } = renderHook(() =>
      useLocalStorage({ key: 'myKey', fallbackValue: 'fallbackValue' }),
    );

    expect(result.current[0]).toEqual('fallbackValue');
  });

  it('should set the fallback value if there is an error parsing the local storage value', () => {
    localStorage.setItem('myKey', 'invalidValue');

    const { result } = renderHook(() =>
      useLocalStorage({ key: 'myKey', fallbackValue: 'fallbackValue' }),
    );

    expect(result.current[0]).toEqual('fallbackValue');
  });

  it('should save the value to local storage when it changes', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'myKey', initialValue: 'myValue' }));

    act(() => {
      result.current[1]('newValue');
    });

    expect(JSON.parse(localStorage.getItem('myKey')!)).toEqual('newValue');
  });

  it('should transform the local storage value using the provided function', () => {
    localStorage.setItem('myKey', JSON.stringify({ value: 'myValue' }));

    const { result } = renderHook(() =>
      useLocalStorage<{ value: string }, string>({
        key: 'myKey',
        storageToStateFn: (data) => data.value,
        fallbackValue: 'fallbackValue',
      }),
    );

    expect(result.current[0]).toEqual('myValue');
  });

  it('should update state when another tab updates the local storage value', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'myKey' }));

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'anotherKey',
          newValue: JSON.stringify('newValue'),
        }),
      );
    });

    expect(result.current[0]).toBe(null);

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'myKey',
          newValue: 'invalidValue',
        }),
      );
    });

    expect(result.current[0]).toBe(null);

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'myKey',
          newValue: JSON.stringify('newValue'),
        }),
      );
    });

    expect(result.current[0]).toBe('newValue');

    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'myKey',
          newValue: undefined,
        }),
      );
    });

    expect(result.current[0]).toBe(null);
  });
});
