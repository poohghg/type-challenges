type IncludesInUnion<U, T> = [U] extends [never]
  ? false
  : U extends T
    ? true
    : false

type FindEles<T extends any[], Duplicates extends any[] = []> = T extends [
  infer Head,
  ...infer Rest,
]
  ? IncludesInUnion<Duplicates[number] | Rest[number], Head> extends false
    ? [Head, ...FindEles<Rest, Duplicates>]
    : FindEles<Rest, [...Duplicates, Head]>
  : T
