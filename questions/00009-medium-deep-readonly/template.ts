type DeepReadonly<T extends object> = keyof T extends never
  ? T
  : { [K: keyof T]: T[K] }
