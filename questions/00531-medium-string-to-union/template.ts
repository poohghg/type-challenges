type StringToUnion<T extends string, String extends string[] = []> =
  T extends `${infer Str}${infer Rest}`
    ? StringToUnion<Rest, [...String, Str]>
    : String[number]