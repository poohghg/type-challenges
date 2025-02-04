type Mutable<T extends object> = {
  -readonly [Key in keyof T]: T[Key]
}
