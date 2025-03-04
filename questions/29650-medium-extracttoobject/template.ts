type ExtractToObject<T extends object, U extends keyof T> =
  FlattenObject<Omit<T, U> & T[U]>
