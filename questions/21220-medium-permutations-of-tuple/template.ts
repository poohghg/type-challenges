// T 2,3
type Insert<
  T extends unknown[],
  U,
> =
  T extends [infer F, ...infer L]
    ? [F, U, ...L] | [F, ...Insert<L, U>]
    : [U]

type PermutationsOfTuple<
  T extends unknown[],
  R extends unknown[] = [],
> =
  T extends [infer F, ...infer Rest]
    ? PermutationsOfTuple<Rest, Insert<R, F> | [F, ...R]>
    // ? Insert<R, F> | [F, ...R]
    : R

{
  let a: PermutationsOfTuple<[1, 2]>
}
