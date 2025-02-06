type IsEmptyArray<T extends string[]> = T['length'] extends 0 ? true : false

type UnionArray<T extends string[], Prefix extends string> = IsEmptyArray<T> extends true ? '' : `${Prefix}${T[number]}`

type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${UnionArray<E, '__'>}${UnionArray<M, '--'>}`
