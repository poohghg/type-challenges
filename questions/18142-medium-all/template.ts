import type { Equal } from '@type-challenges/utils'

export type All<T extends unknown[], U> =
  Equal<T[number], U> extends true
    ? [U] extends [T[0]]
        ? true
        : false
    : false
