type PartialByKeys<T extends object, K extends keyof T = keyof T> =
  FlattenObject<
    Partial<Pick<T, K>> & Omit<T, K>
  >
