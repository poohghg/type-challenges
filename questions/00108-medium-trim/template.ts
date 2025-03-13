type Trim<S extends string> = S extends `${TrimStr}${infer Srt}`
  ? Trim<Srt> extends `${infer Str}${TrimStr}`
    ? Trim<Str>
    : S
  : S
