type ReplaceKeys<U, T extends string, Y extends object> =
  {
    [Key in keyof U]: Key extends T
      ? Key extends keyof Y
        ? Y[Key]
        : never
      : U[Key]
  }
