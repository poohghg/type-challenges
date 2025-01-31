type KebabCase<S extends string> =
  S extends `${infer Start}${infer Rest}`
    ? Rest extends Uncapitalize<Rest>
      ? `${Uncapitalize<Start>}${KebabCase<Rest>}`
      : `${Uncapitalize<Start>}-${KebabCase<Rest>}`
    : S


