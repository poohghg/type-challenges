type Chainable<Options = object> = {
  option<Key extends string, V>(key: Exclude<Key, keyof Options>, value: V): Chainable<Omit<Options, Key> & Record<Key, V>>
  get(): Options
}

