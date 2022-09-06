// type FalseSpace = "" | 0 | false | [] | { [p:string]: never };
type FalseSpace = "" | 0 | false | [] | Record<PropertyKey, never>;
// 以上二者等同

// 方式一，使用 infer 以及递归来解决问题
// type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
//   ? F extends FalseSpace
//     ? AnyOf<R>
//     : true
//   : false;
// 方式二，利用 union 在 extends 两边自动进行比较遍历的特性来解决问题
// 因为 T 是一个 tuple，可以使用 T[number] 来将他转换为 union
// type AnyOf<T extends readonly any[]> = T[number] extends FalseSpace ? false : true;
// 方式三，利用 tuple 在两边也可以进行自动遍历比较的特性来解决问题， 使用 Array<union> 来将 union 转化为 tuple
type AnyOf<T extends readonly any[]> = T extends Array<FalseSpace> ? false : true;

type add = AnyOf<[{}]>;
// 总结
// 1. 在判断 object 是否为空的时候不可以直接使用 extends 来进行判断
// 需要判断他的键值是否为空,即 { [p:string]: never }
// 或是 Record<PropertyKey, never>
//   ·Record<keys, value>
//   - https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
//   ·PropertyKey 
//   - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// 2. 如果是一个 tuple 可以使用 T[number] 来将他转换为 union
// - https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// 3. 使用 Array<union> 来将 union 转化为 tuple，也可以创建一个 Array
// - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
