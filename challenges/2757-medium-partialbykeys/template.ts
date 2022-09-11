type PartialByKeys<T, K = keyof T> =
  { [P in keyof T as P extends K ? P : never]?: T[P] } &
  { [P in keyof T as P extends K ? never : P]: T[P] } extends infer O ? (
    {[P in keyof O]: O[P]}
  ) : never

// 总结
// 利用 extends infer O 来将由 & 合并的对象转化为一个对象