export type Expect<T extends true> = T
export type ExpectTrue<T extends true> = T
export type ExpectFalse<T extends false> = T
export type IsTrue<T extends true> = T
export type IsFalse<T extends false> = T

/**
 * 구조적 동일성을 비교하는 타입
 *  - X와 Y가 구조적으로 동일한지 비교
 * type A = (<T>() => T extends number ? 1 : 2);
 * type B = (<U>() => U extends 3 ? 1 : 2);
 * type IsEqual = A extends B ? true : false;  // false
 */

export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false

export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true

// https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
export type IsAny<T> = 0 extends (1 & T) ? true : false
export type NotAny<T> = true extends IsAny<T> ? false : true

export type Debug<T> = { [K in keyof T]: T[K] }
export type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>

export type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false
export type ExpectValidArgs<FUNC extends (...args: any[]) => any, ARGS extends any[]> = ARGS extends Parameters<FUNC>
  ? true
  : false

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never
