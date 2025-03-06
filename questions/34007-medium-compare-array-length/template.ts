// type CompareArrayLength<T extends any[], U extends any[], R extends any[] = []> =
//   T['length'] extends U['length']
//     ? 0
//     : R['length'] extends T['length'] | U['length']
//       ? T['length'] extends R['length']
//         ? -1
//         : 1
//       : CompareArrayLength<T, U, [...R, 0]>

type CompareArrayLength<T extends unknown[], U extends unknown[]> = T['length'] extends U['length']
  ? 0
  : `${U['length']}` extends keyof T ? 1 : -1
