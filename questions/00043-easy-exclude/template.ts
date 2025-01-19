// Typescript는 유니온 T를 순회하면서 각 원소들을 주어진 조건에 적용
// 참조 https://www.typescriptlang.org/ko/docs/handbook/2/conditional-types.html
type MyExclude<T, U> = T extends U ? never : T

