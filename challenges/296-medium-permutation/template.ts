type Permutation<T, K = T> = [T] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never;

type a = Permutation<'A' | 'B' | 'C'>

// 总结
// 1. Exculde<T, K> 用于 union
// 2. Omit<T, K> 用于 object
// 当 T extends never 时，typescript 会将 never 看作一个空的 union 而不是 never 类型
// 所以我们可以通过 array 的方式来判断 T[] extends never[] 来判断 T 是否为 never
// 还可以通过 [T] extends [never] 来判断 T 是否为 never 
// 3. 该题详细解释请移步
// - https://github.com/type-challenges/type-challenges/issues/614