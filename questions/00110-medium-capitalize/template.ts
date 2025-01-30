// infer추론은 한 번에 한 문자만 추론하고 마지막 추론은 나머지 모든 문자를 추론합
// https://github.com/type-challenges/type-challenges/issues/759

type MyCapitalize<S extends string> = S extends `${infer Head}${infer Tail}` ? `${Uppercase<Head>}${Tail}` : S

