type DropChar<S, C extends string> = S extends `${infer F}${C}${infer R}` ? `${DropChar<`${F}${R}`, C>}` : S

type kkkk = DropChar<' b u t t e r f l y ! ', ' '>

// 总结
// 1. 用递归的方式，把字符串中的字符去掉