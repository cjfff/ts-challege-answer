/* _____________ 你的代码 _____________ */

type First<T extends any[]> = T extends [first: infer F, ...others: any[]] ? F : never;

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/14/answer/zh-CN
  > 查看解答：https://tsch.js.org/14/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
