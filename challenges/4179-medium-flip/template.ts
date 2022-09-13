type Flip<T extends Record<any, any>> = {
  [K in keyof T as `${T[K]}`]: K
}

type ajgajg  = Flip<{ pi: 3.14; bool: true }>

// 总结
// 1. 利用断言来将 K 转化为字面量变量
// 2. 使用 Record 来将 T 约束成为 any 类型的，这样就可以任意赋值
