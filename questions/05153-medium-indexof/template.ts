import type { Equal } from '@type-challenges/utils'

export type IndexOf<T extends any[], U, R extends number[] = []> =
  T extends [infer S, ...infer Rest]
    ? Equal<S, U> extends true
      ? R['length']
      : IndexOf<Rest, U, [...R, 0]>
    : -1
