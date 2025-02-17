// type NumberRange<L, H, Sequence extends any[] = [], R extends any[] = []> =
//   Sequence['length'] extends H
//     ? [...R, Sequence['length']][number]
//     : Sequence['length'] extends L
//       ? NumberRange<L, H, [...Sequence, Sequence['length']], [Sequence['length']]>
//       : NumberRange<L, H, [...Sequence, Sequence['length']], [...R, Sequence['length']]>

type RangeToUnion<L, C extends any[] = []> =
  C['length'] extends L
    ? [...C, C['length']][number]
    : RangeToUnion<L, [...C, C['length']]>

type NumberRange<L, H> = L | Exclude<RangeToUnion<H>, RangeToUnion<L>>
