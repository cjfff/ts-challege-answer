type MyPick<T extends Record<string, any>, K extends keyof T> = {
  [key in K]: T[key];
};

type a = MyPick<Todo, "title" | "completed">;

// type ArrayPropertyNames<T> = {
//   [K in keyof T]: T[K] extends Array<any> ? K : never;
// }[keyof T];
/* _____________ 测试用例 _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
