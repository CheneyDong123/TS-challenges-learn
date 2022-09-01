import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,

  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,

  Expect<Equal<MyPush<[3, 2], 1>, [3, 2, 1]>>,
  Expect<Equal<MyPush<['a', 'b', 'c'], 'd'>, ['a', 'b', 'c', 'd']>>,

  Expect<Equal<MyUnshift<[2, 1], 3>, [3, 2, 1]>>,
  Expect<Equal<MyUnshift<['b', 'c', 'd'], 'a'>, ['a', 'b', 'c', 'd']>>,
]