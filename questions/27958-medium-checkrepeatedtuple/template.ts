import type { Equal } from '@type-challenges/utils'

type Includes<T extends unknown[], U> =
  T extends [infer F, ...infer R]
    ? Equal<U, F> extends true
      ? true
      : Includes<R, U>
    : false

export type CheckRepeatedTuple<T extends unknown[]> =
  T extends [infer F, ...infer Rest]
    ? Includes<Rest, F> extends true
      ? true
      : CheckRepeatedTuple<Rest>
    : false
