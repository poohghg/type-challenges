type FlattenDepth<T extends any[], Count extends number = 1, CountArray extends any[] = []> =
  Count extends CountArray['length']
    ? T
    : T extends [infer S, ...infer Rest]
      ? S extends any[]
        ? [...FlattenDepth<S, Count, [...CountArray, 1]>, ...FlattenDepth<Rest, Count, CountArray>]
        : [S, ...FlattenDepth<Rest, Count, CountArray>]
      : T
