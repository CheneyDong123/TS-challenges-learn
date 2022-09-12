type ObjectEntries<T, K extends keyof T = keyof T> = K extends K
  ? [K, T[K] extends undefined ? undefined : Exclude<T[K], undefined>]
  : never;

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ajga = ObjectEntries<{ key?: undefined }>;

// 总结
// 1. 当要获取一个对象内部的属性以及类型可以通过设置一个额外变量 K 
// 来通过 keyof 获取到该对象的属性值， 然后通过 K extends K 来遍历每一个属性
// 再通过 T[K] 来获取到每一个属性的类型，再对这个类型进行处理
