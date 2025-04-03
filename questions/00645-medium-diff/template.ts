type FF<T extends object> = {
  [K in keyof T]: T[K]
}

type Diff<O extends object, O1 extends object> =
  FF<Omit<O, keyof O1> & Omit<O1, keyof O>>
