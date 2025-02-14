type Chunk<T extends any[], N extends number, Swap extends any[] = []> =
  Swap['length'] extends N
    ? [Swap, ...Chunk<T, N>]
    : T extends [infer S, ...infer Rest]
      ? Chunk<Rest, N, [...Swap, S]>
      : Swap extends [] ? [] : [Swap]
