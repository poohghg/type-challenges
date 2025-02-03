type CheckPrefix<T> = T extends '+' | '-' ? T : never
type CheckSuffix<T> = T extends `${infer P}%` ? [P, '%'] : [T, '']

type PercentageParser<S extends string> =
  S extends `${CheckPrefix<infer Fist>}${infer Rest}`
    ? [Fist, ...CheckSuffix<Rest>]
    : ['', ...CheckSuffix<S>]
