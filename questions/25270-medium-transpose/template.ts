type MergeToArray<T extends number[], Array extends number[][]> = {
  [K in keyof T]: K extends keyof Array ? [...Array[K], T[K]] : [T[K]]
}

type Transpose<M extends number[][], Result extends number[][] = []> =
  M extends [infer FirstArray extends number[], ...infer RestArray extends number[][]]
    ? Transpose<RestArray, MergeToArray<FirstArray, Result>>
    : Result
