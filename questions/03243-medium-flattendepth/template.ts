type FlattenDepth<
  T extends any[],
  S extends number = 1,
  U extends any[] = [],
> = U['length'] extends S
  ? T
  : T extends [infer F, ...infer Rest]
    ? F extends any[]
      ? [...FlattenDepth<F, S, [...U, 0]>, ...FlattenDepth<Rest, S, U>]
      : [F, ...FlattenDepth<Rest, S, U>]
    : T
