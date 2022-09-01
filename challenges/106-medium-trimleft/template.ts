type workSplace = " " | "\n" | "\t";

type TrimLeft<S extends string> = S extends `${workSplace}${infer R}` ? TrimLeft<R> : S

// 总结
// 1. 利用模板字符串来进行匹配，
// 2. 利用 infer 来匹配去除一个 workSplace 后的字符串
// 3. 递归调用 TrimLeft 来去除剩余的 workSplace