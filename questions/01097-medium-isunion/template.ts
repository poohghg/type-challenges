// type IsUnionImpl<T, C extends T = T> =
//   (T extends infer TItem // Iterate over T, here TItem is an item from the original union T. Ingredients 1&2
//     ? C extends TItem // C holds the original union T. Does union T extends an item from it? // Ingredient 3
//       ? true // yes. that could only be true if union T consist of one item
//       : unknown // no
//     : never) extends true ? false : true // have we got true from the above? yes - it's not a union

type IsUnionImpl<T, C extends T = T> =
  (T extends infer Item
    ? C extends Item
      ? true
      : unknown
    : never) extends true ? false : true

type IsUnion<T> = IsUnionImpl<T>
