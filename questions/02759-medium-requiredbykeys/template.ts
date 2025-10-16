type RequiredByKeys<T, K extends PropertyKey = any> = IntersectionToObj<{
  [P in keyof T as P extends K ? P : never]-?: T[P]
} & Omit<T, K>>
