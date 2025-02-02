type Empty = 0 | '' | null | undefined | false | [] | { [key: string]: never }

type AnyOf<T extends readonly any[]> = T[number] extends Empty ? false : true







