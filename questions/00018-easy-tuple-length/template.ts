type Length<T extends readonly any[]> = T["length"]

type Length1<T extends any> = T extends { length: infer R } ? R : never
