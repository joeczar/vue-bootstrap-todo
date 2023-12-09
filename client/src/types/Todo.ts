// types/TodoList.d.ts (or wherever you define your types)
export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
  temp?: boolean;
}

export interface TodoList {
  id: number;
  title: string;
  todos: Todo[];
}

export interface TodoListStore {
  todoLists: TodoList[];
}
