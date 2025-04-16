type IsUnion<T, All = T> = T extends All
  ? [T] extends [All]
      ? false
      : true
  : never
