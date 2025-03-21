type Get<T, K extends string> =
  K extends keyof T
    ? T[K]
    : K extends `${infer Head}.${infer Rest}`
      ? Get<Get<T, Head>, Rest>
      : never
