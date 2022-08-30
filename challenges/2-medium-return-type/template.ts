// type MyReturnType<T> = any
type MyReturnType<T> = T extends (...args: any[]) => infer X ? X : never

// 总结
// 使用 infer 来推断出返回值类型