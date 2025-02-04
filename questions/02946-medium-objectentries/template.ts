type ObjectEntries<T, K extends keyof T = keyof T> =
  K extends K
    ? [K, T[K] extends undefined | infer Type ? Type : undefined]
    : never
