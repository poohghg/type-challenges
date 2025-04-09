import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> =
  T extends [infer Head, ...infer Rest]
    ? Equal<Head, U> extends true
      ? true
      : Includes<Rest, U>
    : false
