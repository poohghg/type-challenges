type FlattenObject<T extends object> = {
  [Key in keyof T]: T[Key]
}


type AppendToObject<T extends object, U extends string | number | symbol, V> = FlattenObject<T & Record<U, V>>
