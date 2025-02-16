import type { Equal } from '@type-challenges/utils'

export type LastIndexOf<T extends any[], U, Array extends any[] = [], LastIndex = -1> =
  T extends [infer S, ...infer Rest]
    ? Equal<S, U> extends true
      ? LastIndexOf<Rest, U, [...Array, 0], [...Array]['length']>
      : LastIndexOf<Rest, U, [...Array, 0], LastIndex>
    : LastIndex
