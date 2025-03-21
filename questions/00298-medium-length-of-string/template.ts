type LengthOfString<S extends string, Count extends number[] = []> =
  S extends `${string}${infer Rest}`
    ? LengthOfString<Rest, [...Count, 0]>
    : Count['length']
