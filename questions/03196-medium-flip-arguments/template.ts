type FlipArguments<T extends (...args: never[]) => unknown> =
  T extends (...args: infer Args) => infer R
    ? (...args: Reverse<Args>) => R
    : never
