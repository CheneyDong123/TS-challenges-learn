type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U] : P extends keyof T ? T[P] : V
}
type test1 = {
  key: 'cat'
  value: 'green'
}

type abaaa = AppendToObject<test1, 'home', boolean>
// 总结
// 1. 可以使用 | 来进行合并