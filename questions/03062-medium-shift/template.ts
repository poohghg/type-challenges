type Shift<T extends any[]> =
  T extends [any, ...infer Rest]
    ? Rest
    : T
