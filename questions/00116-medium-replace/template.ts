type Replace<S extends string, From extends string, To extends string> =
  S extends `${infer L}${From extends '' ? never : From}${infer R}`
    ? `${L}${To}${R}`
    : S
