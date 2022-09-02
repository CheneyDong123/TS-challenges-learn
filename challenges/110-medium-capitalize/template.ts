type MyCapitalize<S extends string> = S extends `${infer T}${infer U}` ? `${Uppercase<T>}${U}` : S

// 总结
// 1. Uppercase<T> 将 T 中的所有小写字母转换为大写字母