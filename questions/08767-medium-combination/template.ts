// type Combination<T extends string[], R extends string[] = [], Count extends any[] = []> =
//   Count['length'] extends T['length']
//     ? Combinations<[R]>
//     : Combination<T, [...R, T[Count['length']]], [...Count, 0]> | Combination<T, [...R], [...Count, 0]>

// All possible combinations of the elements in the input array
// Item = All: to prevent the same element from being repeated

type Combination<T extends string[], All = T[number], Item = All>
  = Item extends string
    ? Item | `${Item} ${Combination<[], Exclude<All, Item>>}`
    : never
