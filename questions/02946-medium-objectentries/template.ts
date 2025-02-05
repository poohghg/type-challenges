// https://stackoverflow.com/questions/69523580/typescript-keyof-change-the-origin-property-optional
// optional 타입의 값은 undefined ?

type ObjectEntries<T, U = Required<T>> = {
  [K in keyof U]: [K, U[K]]
}[keyof U]
