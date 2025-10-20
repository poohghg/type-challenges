type ObjectEntries<T extends object, K extends keyof T = keyof T> =
  K extends K
    ? [K, T[K] extends undefined ? undefined : Required<T>[K]]
    : never
