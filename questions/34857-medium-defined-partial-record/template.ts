type DefinedPartial<T extends Record<PropertyKey, any>, All extends keyof T = keyof T> =
  All extends All
    ? T | DefinedPartial<Omit<T, All>>
    : never
