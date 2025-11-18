type StrToUnion<S> = S extends `${infer L}${infer R}`
  ? L | StrToUnion<R>
  : never

type AllCombinations<S extends string, U extends string = StrToUnion<S>> =
  [U] extends [never]
    ? ''
    : '' | {
      [K in U]: `${K}${AllCombinations<'', Exclude<U, K>>}`
    }[U]
