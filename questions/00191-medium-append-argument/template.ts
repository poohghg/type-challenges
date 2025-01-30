type AppendArgument<Fn extends (...args: any) => unknown, A> =
  Fn extends (...args: infer Args) => infer R
    ? (...args: [...Args, A]) => R
    : never


