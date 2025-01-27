type DeepReadonly<T> = T extends any ? {
  readonly [Key in keyof T]: keyof T[Key] extends never ? T[Key] : DeepReadonly<T[Key]>
} : never


