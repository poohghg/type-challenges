type Chunk<T extends any[], N extends number, R extends any[] = []> =
  R['length'] extends N
    ? [R, ...Chunk<T, N>]
    : T extends [infer S, ...infer Rest]
      ? Chunk<Rest, N, [...R, S]>
      : R extends [] ? [] : [R]
