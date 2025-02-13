type GreaterThan<T extends number, U extends number, R extends any[] = []> =
  T extends R['length']
    ? false
    : U extends R['length']
      ? true
      : GreaterThan<T, U, [...R, 1]>
