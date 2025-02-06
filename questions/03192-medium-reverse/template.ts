// type Reverse<T extends any[], R extends any[] = []> =
//   T extends [...infer Start, infer Last]
//     ? Reverse<[...Start], [...R, Last]>
//     : R

type Reverse<T extends any[]> =
  T extends [infer Start, ...infer Rest]
    ? [...Reverse<Rest>, Start]
    : T
