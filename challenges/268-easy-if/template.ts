type If<C extends boolean, T, F> = C extends true ? T : F

// 总结
// 1. 类型兼容问题
// 2. null 在严格模式于非严格模式下的兼容性问题
// -https://www.typescriptlang.org/docs/handbook/type-compatibility.html