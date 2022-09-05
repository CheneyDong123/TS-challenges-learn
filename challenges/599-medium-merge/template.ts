type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never
}

// 总结
// 使用 | 运算符合并两个类型的 key，然后使用 extends 进行判断
// 如果是 S 的 key，就使用 S 的 value，否则使用 F 的 value