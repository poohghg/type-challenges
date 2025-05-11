type CheckPrefix<T> = T extends '+' | '-' ? T : never
type CheckSuffix<T> = T extends `${infer P}%` ? [P, '%'] : [T, '']

type PercentageParser<A> =
  A extends `${CheckPrefix<infer Head>}${infer Rest}`
    ? [Head, ...CheckSuffix<Rest>]
    : ['', ...CheckSuffix<A>]
