type Permutation<T, All = T> =
  [T] extends [never]
    ? []
    : All extends All
      ? [All, ...Permutation<Exclude<T, All>>]
      : never
