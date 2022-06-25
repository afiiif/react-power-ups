export const noop = () => {};

export const isBrowser = typeof window !== 'undefined';

export type CompareFunction<T> = (prev: T | undefined, next: T) => boolean;
export const strictEquals = <T>(prev: T | undefined, next: T) => prev === next;
