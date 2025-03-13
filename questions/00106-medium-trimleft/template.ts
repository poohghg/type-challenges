type TrimStr = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${TrimStr}${infer R}` ? TrimLeft<R> : S
