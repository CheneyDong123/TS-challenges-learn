type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? [...(F extends any[] ? Flatten<F> : [F]), ...Flatten<R>]
  : [];

type aaaa = Flatten<[1, 2, [3, 4], [[[5]]]]>;
