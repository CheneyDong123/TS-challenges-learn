type workSplace2 = " " | "\n" | "\t";

type Trim<S extends string> = S extends `${infer R}${workSplace2}` ? Trim<R> : TrimLeft<S>;

// 总结
// 先判断是否有左左边有空格，有则先去除左边的空格，再去除右边的空格