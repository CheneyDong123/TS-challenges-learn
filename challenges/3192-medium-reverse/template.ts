type Reverse<T> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : []

// 总结
// 1. infer 
// 2. ... spread operator 