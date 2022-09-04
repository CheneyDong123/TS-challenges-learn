type namespace = "-" | "_" | 'n'

type Absolute<T extends number | string | bigint> = `${T}` extends `${namespace}${infer R}` ? `${R}` : `${T}`

// 总结
// 可以使用模板字符串将其余类型转换为 string ，之后再利用 infer 来进行处理