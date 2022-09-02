type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer T}${From}${infer U}`
  ? `${T}${To}${ReplaceAll<U, From, To>}`
  : S;

  // 总结
  // 1. 在模板字符串内，也可以递归调用