// 명시적으로 작성된 키는 type = { ... }리터럴 타입인 반면
// 인덱스 시그니처 키는 리터럴 타입이 아니다.

type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K ? never :
    K extends P ? K : never]: T[K]
}
