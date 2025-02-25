type Filter<T extends any[], P> =
  T extends [infer Head, ...infer Rest]
    ? Head extends P
      ? [Head, ...Filter<Rest, P>]
      : [...Filter<Rest, P>]
    : []
