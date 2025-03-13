type GetOptional<T extends object> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}
