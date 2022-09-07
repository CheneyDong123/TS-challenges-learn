type PercentageParser<A extends string> = A extends `${infer L}${infer R}`
  ? L extends '+' | '-'
    ? R extends `${infer N}%` ? [L, N, '%'] : [L, R, '']
    : A extends `${infer N}%` ? ['', N, '%'] : ['', A, '']
  : ['', '', '']


  // 总结
  // 当从头开始不好处理时，我们可以考虑从尾部开始处理