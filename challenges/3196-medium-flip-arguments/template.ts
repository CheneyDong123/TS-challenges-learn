type FlipArguments<T extends Function> = T extends (
  ...args: infer args
) => infer R
  ? (...args: Reverse<args>) => R
  : never;

type halgag = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>

// 总结
// 1. infer
// 2. 利用 Rest Parameters 来推断类型
// - https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters-and-arguments
