type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

const foo = (arg1: string, arg2: number): void => {}

type a = typeof foo