type Includes<T extends readonly any[], U> =
  T extends [infer Start, ...infer Rest]
    ? Start extends U
      ? true
      : Includes<Rest, U>
    : false

export type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
    ? true
    : false
