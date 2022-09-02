type AppendArgument<Fn, A> = Fn extends (...args: infer T) => infer R ? (...args: [...T, A]) => R : never

// 总结
// 1. 使用 ...args 来接受参数，并用 infer 来推断该类型
// 2. 之后使用 [...T, A] 来为 args 添加类型