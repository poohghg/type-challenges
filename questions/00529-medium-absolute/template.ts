/**
 * 숫자형은 template literal type을 검사하는 조건에 걸리지 못하기 때문 에 음수가 문자열인 형태로 반환될 것입니다.
 * 이를 해결하기 위해 숫자를 문자열로 변 환할 필요가 있습니다:
 */

type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer U}` ? U : `${T}`