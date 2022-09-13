type BEM<B extends string, E extends string[], M extends string[]> 
= `${B}${E extends [] ? "" : `__${E[number]}`}${M extends [] ? "" : `--${E[number]}`}`;


type afjaj<T extends string[]> = T[number]

type jalgjaj = afjaj<["a", "b", "c"]>

// 总结
// 1. 使用 T[number] 来自动遍历，获取类型
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content