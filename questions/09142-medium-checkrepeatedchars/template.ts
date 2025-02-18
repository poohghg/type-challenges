type CheckRepeatedChars<T extends string, U = never> =
  T extends `${infer S}${infer Rest}`
    ? T extends U
      ? true
      : CheckRepeatedChars<Rest, U | S>
    : false
