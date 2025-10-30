type FlipArguments<T extends (...args: any[]) => unknown> =
  T extends (...args: infer Args) => infer R
    ? (...args: Reverse<Args>) => R
    : T
