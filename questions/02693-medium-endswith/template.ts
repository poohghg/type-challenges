type EndsWith<T extends string, U extends string> =
  T extends `${infer Start}${U}`
    ? true
    : false
