type MyPick<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? Key : never]: T[Key]
}
