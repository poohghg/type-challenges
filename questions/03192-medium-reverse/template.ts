type Reverse<T> =
  T extends [infer S, ...infer Rest]
    ? [...Reverse<Rest>, S]
    : []
