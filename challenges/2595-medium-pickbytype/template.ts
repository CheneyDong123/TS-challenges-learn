type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}

// 总结
// 使用 as never 来进行过滤