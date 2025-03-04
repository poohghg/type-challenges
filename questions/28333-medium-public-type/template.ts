type IsPublic<T> = T extends string | number
  ? `${T}` extends `_${string}`
    ? true
    : false
  : false

type PublicType<T extends object> = {
  [K in keyof T as IsPublic<K> extends true ? never : K]: T[K]
}
