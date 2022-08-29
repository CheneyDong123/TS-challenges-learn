import { Equal } from "@type-challenges/utils";

export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

// js
// 使用循环遍历
function includes(T, U) {
  for (let j = 0; j < T.length; j++) {
    const element = T[j];
    if (element === U) {
      return true;
    }
  }

  return false;
}

// 在 ts 中遍历数组是这样的 { [P in keyof T]: T[P] } 结果将会反回一个对象，显然不符合题目条件。所以这样做是不行的

// 使用递归来进行遍历
function recursion(arr, key) {
  function _(arr, key) {
    let [first, ...rest] = arr;
    if (arr.length === 0) return false;

    if (first === key) {
      return true;
    }

    _(rest, key);
  }

  return _(arr, key);
}

// 总结
// 1. 当不在对象内遍历数组时，可以考虑使用递归来进行遍历
// 2. ts 模块化规范
//   - 当使用 import/export 时，使用时需要引入
//   - 当不使用时，ts 默认所有为全局变量， 可以直接使用， 无需引入
