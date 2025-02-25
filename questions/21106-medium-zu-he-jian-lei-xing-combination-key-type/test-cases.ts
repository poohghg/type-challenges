import type { Equal, Expect } from '@type-challenges/utils'

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']
type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn'

type ModifierKeys2 = ['cmd', 'ctrl', 'ctrl', 'cmd']
type CaseTypeTwo =
  'cmd ctrl'
  | 'ctrl ctrl'
  | 'ctrl cmd'
  | 'ctrl cmd'
  | 'ctrl ctrl'
  | 'ctrl cmd'
  | 'cmd ctrl'
  | 'cmd ctrl'
  | 'cmd cmd'
  | 'cmd cmd'
  | 'cmd ctrl'
  | 'cmd cmd'

type cases = [
  Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
  Expect<Equal<Combs<ModifierKeys2>, CaseTypeTwo>>,
]

let a: Combs<ModifierKeys2>
