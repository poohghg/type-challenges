type AllCombinations<S> =
  S extends `${infer Start}${infer Rest}`
    ? S
    : S
