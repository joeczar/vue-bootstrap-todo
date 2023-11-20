export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface CreateTodoDTO {
  title: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
}

export interface TodoUpdate {
  title?: string;
  completed?: boolean;
}
