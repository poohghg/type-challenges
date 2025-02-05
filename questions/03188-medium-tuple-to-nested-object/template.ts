type TupleToNestedObject<T extends readonly string[], U> =
  T extends [infer Start extends string, ...infer Last extends string[]]
    ? {
        [Key in Start]: TupleToNestedObject<Last, U>
      }
    : U
