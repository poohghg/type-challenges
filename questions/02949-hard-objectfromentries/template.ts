// todo 다시해보기
type ObjectFromEntries<T extends [string, any]> = {
  [K in T[0]]: T extends [K, any] ? T[1] : never
}
