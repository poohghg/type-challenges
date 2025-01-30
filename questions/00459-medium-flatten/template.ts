type IsArray<T> = T extends any[] ? true : false

type Flatten<T extends unknown[], Result extends unknown[] = []> =
  T extends [infer First, ...infer Rest]
    ? First extends any[]
      ? Flatten<[...First, ...Rest], Result>
      : Flatten<Rest, [...Result, First]>
    : Result
