type MyCapitalize<S extends string> = S extends `${infer Head}${infer Rest}`
  ? `${Capitalize<Head>}${Rest}`
  : S
