// type MyOmit<T, K> = any
type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

// js
function omit() {

}

// 思路
// 1. 返回一个对象
// 2. 遍历对象 T
// 3. 去除 K 中的元素
// 4. 如果 T 中的元素不在 K 中，则添加到返回对象中
// 5. K 中元素必须是 T 中的元素，否则报错