type Flip<T extends Record<string, string | number | bigint | boolean | null | undefined>> = {
  [P in keyof T as `${T[P]}`]: P
}
