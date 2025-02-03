//  인덱스 서명 키는 string | number | symbol.

type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K]
}
