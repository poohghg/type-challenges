type KeyOfString = keyof string // "length" | "toUpperCase" | "charAt" | ...
type KeyOfNumber = keyof number // never
type KeyOfBoolean = keyof boolean // never
type KeyOfSymbol = keyof symbol // never
type KeyOfBigInt = keyof bigint // never
type KeyOfNull = keyof null // never (오류)
type KeyOfUndefined = keyof undefined // never (오류)
// 에서 string만 원래 객체처럼 보이지만, 실제로는 변하지 않는 유일한 원시 타입이다!

type DeepReadonly<T> = {
  readonly [Key in keyof T]: keyof T[Key] extends never ? T[Key] : DeepReadonly<T[Key]>
}
