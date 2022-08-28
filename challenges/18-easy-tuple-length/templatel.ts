// type Length<T> = any
type Length<T extends readonly any[]> = T['length']


function Length(array) {
  if (!Array.isArray(array)) return 
  return array.length
}

// 总结
// 1. tuple 类型是一种知道定长，知道每个元素的类型以及确切的位置
// 2. tuple 类型对比 array 类型，tuple 类型可以通过 T["length"] 来获得该 tuple 的长度， 而 array 只会返回 number 类型
let a = ["1", "aga"]

type b = typeof a["length"]

let aTuple = ["1", "aga"] as const

type bTuple = typeof aTuple["length"]