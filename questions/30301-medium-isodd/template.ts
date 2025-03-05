type IsOddOImpl<T extends number[]> =
  T['length'] extends 0 | 1 | 2
    ? T['length'] extends 1
      ? true
      : false
    : T extends [number, ...infer Middle extends number[], number]
      ? IsOddOImpl<Middle>
      : never

type IsOdd<T extends number, Last = LastString<T>, Count extends number[] = []> =
  `${Count['length']}` extends Last
    ? IsOddOImpl<Count>
    : IsOdd<T, Last, [...Count, 0]>

type LastString<T extends string | number> =
  `${T}` extends `${infer Head}${infer Rest}`
    ? Rest extends ''
      ? Head
      : LastString<Rest>
    : T

{
  let a: IsOdd<4>
  let b: IsOdd<2.3>
  let c: LastString<2.3>
}
