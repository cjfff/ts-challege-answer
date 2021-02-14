type MyReturnType1<T> = T extends (...args: any[]) => infer R ? R : any;

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType1<typeof fn>; // should be "1 | 2"