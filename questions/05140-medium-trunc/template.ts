type FillPrefix<T extends string> =
  T extends ''
    ? '0'
    : T extends '-'
      ? '-0'
      : T

type Trunc<T extends string | number> =
  `${T}` extends `${infer R}.${any}`
    ? FillPrefix<R>
    : `${T}`
