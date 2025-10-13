type IntersectionToObj<T> = {
  [K in keyof T]: T[K]
}

type PartialByKeys<T, K = any> =
  IntersectionToObj<
    { [P in keyof T as P extends K ? P : never]?: T[P] }
    & { [p in Exclude<keyof T, K>]: T[p] }
  >
