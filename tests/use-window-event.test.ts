import { renderHook } from '@testing-library/react-hooks';

import { useWindowEvent } from '../src';

describe('useWindowEvent', () => {
  it('should add event listener to window', () => {
    const eventType = 'click';
    const handler = jest.fn();
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    renderHook(() => useWindowEvent(eventType, handler));

    expect(addEventListenerSpy).toHaveBeenCalledWith(eventType, expect.any(Function));
    expect(removeEventListenerSpy).not.toHaveBeenCalled();

    // simulate a window click event
    window.dispatchEvent(new Event(eventType));

    expect(handler).toHaveBeenCalled();

    // cleanup hook
    renderHook(() => useWindowEvent(eventType, handler)).unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(eventType, expect.any(Function));
  });
});
