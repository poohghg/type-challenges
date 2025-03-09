type FlattenObject<T> = {
  [K in keyof T]: T[K]
}

type Chainable<T extends object = {}> = {
  option<K extends string, V>(key: Exclude<K, keyof T>, value: V): Chainable<Omit<T, K> & Record<K, V>>
  get(): {
    [K in keyof T]: T[K]
  }
}
