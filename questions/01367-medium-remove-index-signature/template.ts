type RemoveIndexSignature<T> =
  {
    [Key in keyof T as Key extends any[] ? never : Key]: T[Key]
  }
