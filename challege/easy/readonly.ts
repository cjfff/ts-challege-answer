/* _____________ 你的代码 _____________ */

type MyReadonly<T extends Record<string, any>> = {
  readonly [K in keyof T]: T[K];
};

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
}

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/7/answer/zh-CN
  > 查看解答：https://tsch.js.org/7/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
