declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
  [K in keyof T]: Awaited<T[K]>
}>;