type RequiredByKeys<T, K = keyof T> = {
  [P in keyof T as P extends K ? P : never]-?: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
} extends infer O
  ? {
      [P in keyof O]: O[P];
    }
  : never;

// 总结
// 1. 使用 infer O 来使用 & 连接的对象成为一个
// 2. 使用 -? 来将属性变为可选
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers
