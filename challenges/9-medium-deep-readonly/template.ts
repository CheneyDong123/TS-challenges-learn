// type DeepReadonly<T> = any
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Function
    ? T[P]
    : T[P] extends Object
    ? DeepReadonly<T[P]>
    : T[P];
};

// 总结
// 1. 在进行条件判断时，要注意 Function 也是 Object 的子类型，所以要使用 extends Function 来先判断去除 Function 类型
// 判断完之后，在进行递归调用
