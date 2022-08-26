// type First<T extends any[]> = any
// 解法一   使用 extends 判断 T 是否是一个空数组
// type First<T extends any[]> = T extends [] ? never : T[0]
// 解法二   使用 extends 判断数组的 length 是否为 0 
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 解法三   使用 T[number] 来对数组类型进行遍历，再使用 extends 来进行比对
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// 解法四   使用 infer 来进行推断
type First<T extends any[]> = T extends [infer first, ...infer rest] ? first : never


function First(array) {
  let result

  result = array[0]

  return result
}

// 总结
// 1. 当数组 [] 为空时， 返回的类型为 undefined, type a = First<[]>
// 2. 使用 extends 进行条件判断
// 3. 可以使用 T['length'] 来访问数组的 length     关键字：indexed
// 4. 当使用 T[number] 对数组进行遍历时，返回的类型为一个 union
// 5. 解法四类似于 js 中的解构赋值，不同的是 ts 中是将类型进行提取，并与 infer 搭配使用
