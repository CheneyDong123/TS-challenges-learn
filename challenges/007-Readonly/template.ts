// type MyReadonly<T> = any
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function readonly(obj) {
  let result = {};

  for (const key in obj) {
    result["readonly" + key] = obj[key];
  }

  return result;
}


// 要点提取
// 1. 返回一个对象 result
// 2. 遍历 js 对象/ts 接口   关键字： mapped indexed
// 3. 添加 readonly  关键字： readonly