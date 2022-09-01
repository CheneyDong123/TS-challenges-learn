// pop
type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : never
// shift
type Shift<T extends any[]> = T extends [infer First, ...infer Rest] ? Rest : never
// push
type MyPush<T extends any[] ,U> = [...T, U]
// unshift
type MyUnshift<T extends any[], U> = [U, ...T]

// 总结
// 1. infer 
// 2. rest parameters
// 3. ... spread operator