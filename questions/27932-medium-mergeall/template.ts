type MergeAll<
  XS extends object[],
  R extends object = {},
> = XS extends [infer Head, ...infer Rest extends object[]]
  ? MergeAll<Rest, {
    [K in keyof Head]: K extends keyof R ? R[K] | Head[K] : Head[K]
  } & Omit<R, keyof Head>>
  : FlattenObject<R>
