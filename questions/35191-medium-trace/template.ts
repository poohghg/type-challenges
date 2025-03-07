// type Trace<T extends any[][], Count extends number[] = []> =
//   T extends [infer Head extends any[], ...infer Rest extends any[][]]
//     ? Head[Count['length']] | Trace<Rest, [...Count, 0]>
//     : never

type Trace<T extends any[][]> = {
  [K in keyof T]: T[K][K & keyof T[K]]
}[number]
