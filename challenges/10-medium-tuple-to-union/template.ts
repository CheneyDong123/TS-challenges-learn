// type TupleToUnion<T> = any
// 解法一
type TupleToUnion<T> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest>: never
// 解法二
// type TupleToUnion<T extends any[]> = T extends T ? T[number] : never

// 总结
// 1. 利用 infer 来推断 tuple 内的元素，之后使用递归来进行编写