type Last<T extends any[]> = T extends [...infer Head, infer Last]
  ? Last
  : never
