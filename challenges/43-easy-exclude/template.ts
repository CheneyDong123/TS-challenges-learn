// type MyExclude<T, U> = any
type MyExclude<T, U> = T extends U ? never : T;

function exclude(T, U) {
  return T.filter((item) => !U.includes(item));
}

// 总结
// 1. 当 extends 两边为一个 union 时，会执行类似于双重 for 循环的效果
// 2. never 代表为不存在这个类型，即排除这个类型
