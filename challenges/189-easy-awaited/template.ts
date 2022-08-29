// type MyAwaited<T> = any
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;


// 总结
// 1. infer 只能用在条件类型中
// 2. infer 的作用是设置一个未知量
// 思路：首先使用 extends 来对类型进行约束，指定传入的必须是 Promise 类型，
// 在之后使用 extends 判断 T 是否是一个 Promise。如果是一个 Promise ，使用 infer 来设置一个未知量
// 在判断这个未知量是否也是 Promise，如果是，则递归的调用自己，直到不是 Promise 为止。然后返回结果。
// 由上可知， never 永远不会被触发