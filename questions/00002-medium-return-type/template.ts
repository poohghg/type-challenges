type MyReturnType<T extends (...args: never[]) => unknown> =
  T extends (...args: any[]) => infer R
    ? R
    : never
