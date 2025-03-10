type First<T extends any[]> = T extends [] ? never : T[0]

const arr = [1, 2, 3]
type ArrType = typeof arr
type ArrFirstType = First<ArrType> // never

{
  let a: ArrFirstType
}
