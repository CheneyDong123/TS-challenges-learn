// 方法一：不使用内置泛型
// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [P in K]: T[P]
// } & {
//   [P in keyof T as P extends K ? never : P]: T[P]
// }
// 方法二
type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;
// js
function readonly2(T, K) {
  let result = {};

  for (let i = 0; i < K.length; i++) {
    if (!T.includes(K[i])) {
      throw new Error("Key not found");
    }
  }

  for(let obj in T) {
    if (K.includes(obj)) {
      result["readonly" + obj] = T[obj];
    } else {
      result[obj] = T[obj];
    }
  }

  return result;
}

// 总结
// 1. Intersection Type(交集类型) & 的使用，来实现两个类型的并集
// - https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
// 2. 使用 = 来对 K 设置一个默认值即 K = keyof T, 来解决当未传入 K 时，全部 readonly 的问题
// 3. 使用到的内置泛型： 
// - Readonly<T>：将 T 转为 readonly 类型
// - Pick<T, K>：从 T 中提取 K 的属性
// - Omit<T, K>：从 T 中去除 K 的属性