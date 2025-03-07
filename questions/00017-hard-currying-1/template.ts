type Curry<T extends Function> =
  T extends (...args: infer Args) => infer R
    ? Args extends [infer Head, ...infer Rest]
      ? Rest extends []
        ? (arg: Head) => R
        : (arg: Head) => Curry<(...args: Rest) => R>
      : () => R
    : never

declare function Currying<T extends Function>(fn: T): Curry<T>
