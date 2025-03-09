type MyOmit<T, K> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}
