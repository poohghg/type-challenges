// type Subsequence<T extends any[], R extends any[] = [], Count extends any[] = []> =
//   Count['length'] extends T['length']
//     ? R
//     : Subsequence<T, [...R, T[Count['length']]], [...Count, 0]> | Subsequence<T, R, [...Count, 0]>

type Subsequence<T extends any[], R extends any[] = []> =
  T extends [infer S, ...infer Rest]
    ? Subsequence<Rest, R> | Subsequence<Rest, [...R, S]>
    : R
