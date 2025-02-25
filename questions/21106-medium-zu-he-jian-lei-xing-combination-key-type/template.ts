// 实现 Combs
// type Combs<T extends string[], R extends string[] = []> =
//   T extends [infer Head extends string, ...infer Rest extends string[]]
//     ? R['length'] extends 1
//       ? `${R[0]} ${Head}` | Combs<Rest, R>
//       : Combs<Rest, [...R, Head]> | Combs<Rest, R>
//     : never

type Combs<T extends string[]> =
  T extends [infer Head extends string, ...infer Rest extends string[]]
    ? `${Head} ${Rest[number]}` | Combs<Rest>
    : never
