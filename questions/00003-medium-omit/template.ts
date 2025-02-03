// 인덱스 시그니처의 키를 매핑하기 위해사용

type MyOmit<T extends object, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}
