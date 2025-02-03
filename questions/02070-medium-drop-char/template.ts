type DropChar<S extends string, C extends string> =
  S extends `${infer First}${C}${infer Rest}`
    ? DropChar<`${First}${Rest}`, C>
    : S
