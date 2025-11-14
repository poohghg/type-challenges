type Flip<T extends { [index: string]: any }> = {
  [P in keyof T as `${T[P]}`]: P
}
