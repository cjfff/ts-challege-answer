type MyExclude<T, U> = { [K in keyof T]: K extends U ? never : K }[keyof T];
type MyOmit<T, U> = { [K in MyExclude<T, U>]: T[K] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;
type ExcludeTypes = Exclude<keyof Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
