import { Equal, Expect, NotAny } from "@type-challenges/utils";


type HelloWorld = string; // expected to be a string

/* _____________ 测试用例 _____________ */

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
