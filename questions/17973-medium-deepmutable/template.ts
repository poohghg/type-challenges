type DeepMutable<T extends Record<any, any>> = {
  - readonly [K in keyof T]: T[K] extends Record<any, any>
    ? T[K] extends (...args: never[]) => unknown
      ? T[K]
      : DeepMutable<T[K]>
    : T[K]
}
