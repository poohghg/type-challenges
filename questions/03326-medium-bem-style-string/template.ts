type IsEmptyArray<T extends string[]> = T['length'] extends 0 ? true : false

type UnionString<T extends string[], Prefix extends string> = IsEmptyArray<T> extends true ? '' : `${Prefix}${T[number]}`

type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${UnionString<E, '__'>}${UnionString<M, '--'>}`
