// keyof (T1 | T2)는 슈퍼타입의 키만 추출한다.
// keyof (T1 & T2)는 서버타입의 키를 포함 합집합된 프로퍼티의 키를 모두 추출한다.

type Diff<T1 extends object, T2 extends object> = {
  [Key in keyof (T1 & T2) as Key extends keyof (T1 | T2) ? never : Key]: (T1 & T2)[Key]
}
