type FlattenObject<T extends object> = {
  [Key in keyof T]: T[Key]
}

type RequiredByKeys<T extends object, K extends keyof T = keyof T> =
  FlattenObject<
    Required<Pick<T, K>> & Omit<T, K>
  >
