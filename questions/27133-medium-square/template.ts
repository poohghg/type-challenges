type PadList<N extends number, C extends any[] = []> = C['length'] extends N
  ? C
  : PadList<N, [...C, 0]>

type Absolute1<T extends number> = `${T}` extends `-${infer U extends number}`
  ? U
  : T

// 3 = 9
// 3 + 3 + 3 = 9
type Square<
  N extends number,
  C extends any[] = [],
  D extends any[] = [],
  T extends number = Absolute1<N>,
> = C['length'] extends T
  ? D['length']
  : Square<N, [...C, 0], [...D, ...PadList<T>]>

{
  let a: Square<50>
}
