type FirstUniqueCharIndex<T extends string, U extends string[] = []> =
  T extends `${infer First}${infer Rest}`
    // 이미 남으
    ? First extends U[number]
      ? FirstUniqueCharIndex<Rest, [...U, First]>
      : Rest extends `${string}${First}${string}`
        ? FirstUniqueCharIndex<Rest, [...U, First]>
        : U['length']
    : -1
