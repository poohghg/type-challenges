type StringToUnion<T extends string> =
  T extends `${infer Head}${infer Rest}`
    ? `${Head}` | StringToUnion<Rest>
    : never
