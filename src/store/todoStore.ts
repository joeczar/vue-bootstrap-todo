import { Todo, TodoStore } from './../types/Todo';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
  state: (): TodoStore => ({
    todos: [
      {
        id: '1',
        title:
          'Build a Todo App with Vue 3 and the Composition API, Pinia and Bootstrap',
        completed: false,
      },
    ],
  }),
  actions: {
    addTodo(newTodoText: string) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: newTodoText,
        completed: false,
      };
      this.todos.push(newTodo);
    },
    deleteTodoById(todoId: string) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
      console.log({ deleteTodoById: todoId, todos: this.todos });
    },
    toggleTodoStatus(todoId: string) {
      const todo = this.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
