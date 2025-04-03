type FlattenO<T extends object> = {
  [K in keyof T]: T[K]
}

type Merge<F, S> = FlattenO<Omit<F, keyof S> & S>
