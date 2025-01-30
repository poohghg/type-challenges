type LengthOfString<S extends string, Strings extends string[] = []> =
  S extends `${infer First}${infer Rest}`
    ? LengthOfString<Rest, [...Strings, First]>
    : Strings['length']



