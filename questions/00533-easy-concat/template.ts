type ReadonlyArrayType = readonly unknown []

type Concat<T extends ReadonlyArrayType, U extends ReadonlyArrayType> = [...T, ...U]


