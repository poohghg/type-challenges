// Array에는 다양한 요소 유형의 배열을 나타낼 수 있는 제네릭 유형이기 때문에 적용할 수 없습니다.
type Length<T extends readonly any[]> = T['length']
