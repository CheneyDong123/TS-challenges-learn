type FlattenDepth<A, T = 1, U extends any[] = []> = U["length"] extends T
  ? A
  : A extends [infer F, ...infer R]
  ? [
      ...(F extends any[] ? FlattenDepth<F, T, [...U, 1]> : [F]),
      ...FlattenDepth<R, T, U>
    ]
  : [];

type sgsgj = FlattenDepth<[1, [2]]>

// 总结
// 1. 利用数组的 length 属性来实现深度控制
// 2. 利用递归来实现数组的扁平化
// 3. 注意在递归的过程中，第一个递归主要用来 Flatten 每一个元素，而第二个递归只是起推进作用
// 所以在传递 U 时，第一个递归需要增加一个元素，而第二个不需要增加
