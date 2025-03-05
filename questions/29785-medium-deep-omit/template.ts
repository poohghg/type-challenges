type DeepOmit<T extends Record<string, any>, U extends string> = U extends `${infer Head}.${infer Rest}`
  ? {
      [K in keyof T]: K extends Head ? DeepOmit<T[K], Rest> : T[K]
    }
  : Omit<T, U>
