type Merge<F, S> = FlattenObject<Omit<F, keyof S> & S>
