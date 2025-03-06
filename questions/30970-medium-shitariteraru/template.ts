import type { Equal } from '@type-challenges/utils'

export type IsFixedStringLiteralType<S extends string> =
  {} extends Record<S, 1>
    ? false
    : Equal<[S], S extends unknown ? [S] : never>
