declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise< { [P in keyof T] : Awaited<T[P]>} >

// 总结
// 1. Awaited<T> T 是一个值，可以是 Promise 类型，也可以是其他类型, 最后返回 T 的类型
// 2. 当一个数组使用 as const 时，数组中的每个元素都会变成字面量类型
// 3. 使用 [P in keyof T] 时，会返回数组的索引，所以在使用 T[P] 就会获得当前索引数据的类型
const b = [1, 2, 3] as const
type c<T extends readonly (string | number | symbol)[]> = T extends [...infer R, infer Last] ? Last : never
type bb = c<typeof b>

// 获得数组中的某个或者某些元素时，可以使用 [infer First, ...infer Rest] 来获得, 
// 返回的仍是经过处理的原来数组，而不是由类型组成的数组
// 获取数组中的每一个元素类型时，可以和使用 keyof T 来获得索引值 然后再通过 T[P] 来获得类型, 
// 返回值为类型组成的数组
