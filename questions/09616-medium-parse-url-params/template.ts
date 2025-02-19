type ParseUrlParams<T extends string> =
  T extends `${string}:${infer Param}`
    ? Param extends `${infer P}/${infer Rest}`
      ? P | ParseUrlParams<Rest>
      : Param
    : never
