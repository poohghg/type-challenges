type FindEles<T extends any[], Duplicates = never> =
  T extends [infer S, ...infer Rest]
    ? S extends Duplicates
      ? FindEles<Rest, Duplicates>
      : S extends Rest[number]
        ? FindEles<Rest, Duplicates | S>
        : [S, ...FindEles<Rest, Duplicates>]
    : []
