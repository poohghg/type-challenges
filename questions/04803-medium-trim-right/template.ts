type TrimRight<S extends string> =
  S extends `${infer Start}${Space}`
    ? TrimRight<Start>
    : S
