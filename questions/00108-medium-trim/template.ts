type Trim<S extends string> = S extends `${TrimStr}${infer Str}` | `${infer Str}${TrimStr}`
  ? Trim<Str>
  : S
