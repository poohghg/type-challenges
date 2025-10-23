type TupleToNestedObject<T, U> =
  T extends [infer F extends string, ...infer R]
    ? { [K in F]: TupleToNestedObject<R, U> }
    : U
