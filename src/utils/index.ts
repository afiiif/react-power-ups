export const noop = () => {};

export type CompareFunction<T> = (prev: T | undefined, next: T) => boolean;
export const strictEquals = <T>(prev: T | undefined, next: T) => prev === next;
