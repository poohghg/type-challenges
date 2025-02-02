// 타입스크립트는 유니온타입의 제네릭 인수 또는 extends(조건문)로 평가할때 분산하여 처리한다.
// TypeScript는 never조건문에 분배할 때 빈 유니언으로 취급한다 .
// 즉, 'a' | never분배될 때 그냥 'a'분배될 때로 단축됩니다.

type IsNever<T> = [T] extends [never] ? true : false


