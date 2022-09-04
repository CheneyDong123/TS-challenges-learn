// 方法一
// type StringToArray<S extends string> = S extends `${infer T}${infer U}` ? [T, ...StringToArray<U>] : [];

// type LengthOfString<S extends string> = StringToArray<S>['length']

// 方法二
type LengthOfString<S extends string, K extends any[] = []> = S extends `${any}${infer T}` ? LengthOfString<T, [...K, any]> : K['length']
type asss = LengthOfString<'kumiko'>


// 总结
// 当目标是一个 tuple 是，我们可以通过 ['length'] 来直接获取到 tuple 的长度
// 巧用 any 来填充 tuple，最后使用 length 来获取长度