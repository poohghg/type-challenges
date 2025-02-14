type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  R extends N[] = [],
> = R['length'] extends T['length']
  ? R
  : Fill<T, N, Start, End, [...R, N]>
