type NormalFindAll<
  T extends string,
  Matcher extends string,
  Count extends any[] = [],
  R extends number[] = [],
> =
  T extends `${string}${infer Rest}` ?
    T extends `${Matcher}${string}`
      ? NormalFindAll<Rest, Matcher, [...Count, 0], [...R, Count['length']]>
      : NormalFindAll<Rest, Matcher, [...Count, 0], R>
    : R

type FindAll<
  T extends string,
  P extends string,
> =
  P extends ''
    ? [] : NormalFindAll<T, P>
