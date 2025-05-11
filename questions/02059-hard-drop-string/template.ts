// type DropString<S, R extends string, StringUnion = StringToUnion<R>> = S extends `${infer Head}${infer Rest}`
//   ? Head extends StringUnion
//     ? `${DropString<Rest, R, StringUnion>}`
//     : `${Head}${DropString<Rest, R, StringUnion>}`
//   : ''

type DropOne<S extends string, R extends string> = S extends `${infer A}${R}${infer B}` ?
  DropOne<`${A}${B}`, R>
  : S

type DropString<S extends string, R extends string> = R extends `${infer F}${infer L}` ?
  DropString<DropOne<S, F>, L>
  : S
