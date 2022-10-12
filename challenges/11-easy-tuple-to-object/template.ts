// type TupleToObject<T extends readonly any[]> = any
type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P
}

function tupleToObject(tuple) {
  let result = {}

  for (const key in tuple) {
    result[key] = key
  }

  return result;
}

// 总结
// 1. as const 字面量变量
// 2. typeof 
// -https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-content
// 3. 遍历总结
//   1. union 使用 in 可直接遍历
//   2. interface 使用 keyof 取出所有类型，再使用 in 遍历
//   3. 数组使用 T[number] 取出所有类型， 再使用 in 遍历
// 4. 数组类型中只能有 string | number | symbol 类型, 即 Propertykey