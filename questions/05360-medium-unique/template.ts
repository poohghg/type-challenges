import type { Equal } from '@type-challenges/utils'

type Has<T extends any[], U> =
  T extends [infer S, ...infer Rest]
    ? Equal<S, U> extends true
      ? true
      : Has<Rest, U>
    : false

export type Unique<T extends any[], Result extends any[] = []> =
  T extends [infer S, ...infer Rest]
    ? Has<Result, S> extends true
      ? Unique<Rest, Result>
      : Unique<Rest, [...Result, S]>
    : Result
