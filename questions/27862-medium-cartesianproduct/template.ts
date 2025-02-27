type CartesianProduct<T, U> =
  T extends T
    ? U extends U
      ? [T, U]
      : never
    : never

{
  let a: CartesianProduct<1 | 2, 'a' | 'b'>
}
