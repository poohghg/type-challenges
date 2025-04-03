type RequiredKeys<T extends object, All = keyof T> =
  All extends keyof T
    ? T[All] extends Required<T>[All]
      ? All
      : never
    : never
