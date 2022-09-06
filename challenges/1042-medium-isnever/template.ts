// 方式一
type IsNever<T> = [T] extends [never] ? true : false

// 总结
// 1. 当 extends never 时，never 会被看做一个空的 union，所以不可以直接判断