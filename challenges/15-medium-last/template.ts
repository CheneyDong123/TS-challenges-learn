// type Last<T extends any[]> = any
type Last<T extends any[]> = T extends [...infer Rest, infer Last] ? Last : never

// 总结
// 1. 使用 infer 来假设变量
// 2. 使用 spreed opreator 来拆分数组，extends 与 infer 连用常用来推断未知元素