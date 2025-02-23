type FlattenArray<T extends unknown[]> =
  T extends [infer Head, ...infer Rest]
    ? [Head] extends [never]
        ? [...FlattenArray<Rest>]
        : Head extends unknown[]
          ? [...FlattenArray<Head>, ...FlattenArray<Rest>]
          : [Head, ...FlattenArray<Rest>]
    : []

type CountToObject<T extends unknown[], Result extends Record<PropertyKey, unknown[]> = {}> =
  T extends [infer Head extends PropertyKey, ...infer Rest]
    ? Head extends keyof Result
      ? CountToObject<Rest, Omit<Result, Head> & Record<Head, [...Result[Head], 0]>>
      : CountToObject<Rest, Result & Record<Head, [0]>>
    : { [K in keyof Result]: Result[K]['length'] }

type CountElementNumberToObject<T extends unknown[]> = CountToObject<FlattenArray<T>>
