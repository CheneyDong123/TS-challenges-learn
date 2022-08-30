type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

// 总结
// 1. 使用 infer 来推断出参数类型
// - https://github.com/microsoft/TypeScript/pull/24897