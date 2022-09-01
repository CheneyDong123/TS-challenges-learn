// type Chainable = {
//   option(key: string, value: any): any
//   get(): any
// }
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? (V extends T[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<T, K> & Record<K, V>>;
  get(): T;
};

// 要点提取
// 1. 返回一个对象类型，其中有 option 和 get 两个方法
// 2. 该类型可以连续调用，当调用 get 时返回一个对象类型
// 3. 当传入的 key 已经存在时，判断 value 的类型是否与已有的类型一致，
// 如果一致则报错，保持原有类型，如果不一致，则将新类型赋给这个 key

// js
class chain {
  obj = {};
  option(key, value) {
    this.obj[key] = value;
    return this;
  }

  get() {
    return this.obj;
  }
}
const aChain = new chain();

// 总结
// 1. Record 的使用
// - https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
// 2.使用 Omit 来去除 T 中重复的 K
// - https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
// 3. 通过 = 给 T 赋一个初始值
// 4. 递归的调用 Chainable 来实现连续调用