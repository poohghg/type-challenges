type MakeNumArray<T extends number, R extends string[] = []> =
  R['length'] extends T
    ? R
    : MakeNumArray<T, [...R, '']>

type Triangular<N extends number, R extends any[] = [], C extends string[] = []> =
  C['length'] extends N
    ? R['length']
    : Triangular<N, [...MakeNumArray<[...C, 0]['length']>, ...R], [...C, '']>
