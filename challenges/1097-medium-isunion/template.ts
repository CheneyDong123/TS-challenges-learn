type IsUnion<T, A = T> = IsNever<T> extends true
  ? false
  : T extends A
  ? [A] extends [T]
    ? false
    : true
  : false;

type test<T, A = T> = T extends A ? {t1: T, t2:A} : never
type r1 = test<string | number>
type r2 = test<[string | number]>
// 总结
// 1. 利用 union 的 distrubution 特性, 当 T 在 conditional types 中时，union 会被分发
// 2. 利用当 union 外部有 [] 时，ditrubution 会被取消的特点，来对比 T 和 A 是否相等
// - https://github.com/type-challenges/type-challenges/issues/13987
// - https://github.com/type-challenges/type-challenges/issues/3839
