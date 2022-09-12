type TupleToNestedObject<T, U> = T extends [infer F extends PropertyKey, ...infer R] ? {
  [P in F] : TupleToNestedObject<R, U>
} : U


type ajgjag = TupleToNestedObject<['a'], string>

// 总结
// 1. PropertyKey 指的是 string | number | symbol
// 2. infer 用于推断类型
// 3. mapped type 
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 4. 因为 in 右边必须是一个 PropertyKey，所以 F extends PropertyKey 来对 F
// 进行约束