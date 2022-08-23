// type MyPick<T, K> = any
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P] 
};

// 1. 对比分析法
function myPick(todo, keys) {
  let picked = {};

  keys.forEach((key) => {
    if (key in todo) picked[key] = todo[key];
  });

  return picked;
}

// 要点提取
// 1. 返回一个对象
// 2. 遍历 keys
// - 使用 Mapped type--in 操作符对 keys 进行遍历
//   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. 去除不在 todo 中的 key 
// - 使用 keyof 对类型提取
//   - https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
// - 再使用 extends 来约束类型   Generic Constraints
//   -https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
// 4. 将 key 赋值给 picked