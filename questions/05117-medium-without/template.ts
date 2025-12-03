type Without<T extends unknown[], U extends number | number[]> =
  T extends [infer S, ...infer Rest]
    ? S extends (U extends any[] ? U[number] : U)
      ? [...Without<Rest, U>]
      : [S, ...Without<Rest, U>]
    : []
