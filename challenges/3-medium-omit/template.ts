// type MyOmit<T, K> = any
// 解法一：使用内置泛型 Exclude<T, K>
// type MyOmit<T, K extends keyof T> = {
//   [P in Exclude<keyof T, K>]: T[P]
// }
// 解法二：使用内置泛型 Exculde<T, K> 与 Pick<T, K> 组合
// type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// 解法三：使用 as 断言来进行条件判断
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}


// js
function omit(T, K) {
  let result

  T.foreach((item)=>{
    if(!K.includes(item)) {
      result.push(item)
    }
  })

  return result

}

// 思路
// 1. 返回一个对象
// 2. 遍历对象 T
// 3. 如果 T 中的元素不在 K 中，则添加到返回对象中
// 4. K 中元素必须是 T 中的元素，否则报错


// 总结
// 1. 对象中遍历一个数组可以使用 in 操作符
// 2. 使用内置 Generic(泛型)--Exclude<T, K> 删除 T 中的 K 元素
// 3. 使用内置泛型 Pick<T, K> 只保留 T 中的 K 元素
// 4、使用 as 来判断是否保留元素。即 (P in keyof T) as (P extends K ? never : P) 当 P 在 K 中时，返回 never，否则返回 P
// 当返回 never 时，as 将 P 断言为 never。即去除了当前 P 元素