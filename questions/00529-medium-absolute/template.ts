// type Nums = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
//
// type Absolute<T extends number | string | bigint> =
//   `${T}` extends `${infer Head}${infer Rest}`
//     ? Head extends Nums
//       ? `${Head}${Absolute<Rest>}`
//       : `${Absolute<Rest>}`
//     : ''

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`
