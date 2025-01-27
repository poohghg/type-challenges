// type MyReadonly2<T, K extends keyof T = keyof T> =
//     { readonly [Key in keyof T as Key extends K ? Key : never]: T[Key] }
//     & {
//   [Key in keyof T as Key extends K ? never : Key]: T[Key]
// }

// type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<T> & {
//   [Key in keyof T as Key extends K ? never : Key]: T[Key]
// }

type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>
