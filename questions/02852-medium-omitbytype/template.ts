type OmitByType<T extends object, U> = {
  [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]
}
