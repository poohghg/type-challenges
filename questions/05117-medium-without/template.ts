type ArrayUnion<T> = T extends any[] ? T[number] : T

type Without<T extends any[], U> =
  T extends [infer S, ...infer Rest]
    ? S extends ArrayUnion<U>
      ? Without<Rest, U>
      : [S, ...Without<Rest, U>]
    : T
