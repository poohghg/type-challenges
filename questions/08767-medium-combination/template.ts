type Combine<T extends string[], U extends string = ''> =
  T extends [infer First extends string, ...infer Rest extends string[]]
    ? Combine<Rest, U | `${U}${U extends '' ? '' : ' '}${First}`>
    : U

type Combinations<T extends string[][]> = T extends [infer First extends string[], ...infer Rest extends string[][]]
  ? Exclude<Combine<First>, ''> | Combinations<Rest>
  : never

type Combination<T extends string[], R extends string[] = [], Count extends any[] = []> =
  Count['length'] extends T['length']
    ? Combinations<[R]>
    : Combination<T, [...R, T[Count['length']]], [...Count, 0]> | Combination<T, [...R], [...Count, 0]>

// type Combination<T extends string[], R extends string[] = []> = T[number]
