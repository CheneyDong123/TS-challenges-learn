// type TupleToUnion<T> = any
type TupleToUnion<T> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest>: never

// 总结
// 1. 利用 infer 来推断 tuple 内的元素，之后使用递归来进行编写