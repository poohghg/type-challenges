type ReplaceAll<S extends string, From extends string, To extends string> =
  S extends `${infer L}${From extends '' ? never : From}${infer R}`
    ? `${L}${To}${ReplaceAll<R, From, To>}`
    : S
