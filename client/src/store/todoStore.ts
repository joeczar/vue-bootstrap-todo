import { CreateTodoDTO, Todo, TodoStore } from './../types/Todo';
import { defineStore } from 'pinia';
import { TodoService } from './../api/todosService';

export const useTodoStore = defineStore('todoStore', {
  state: (): TodoStore => ({
    todos: [
      {
        id: 0,
        title:
          'Build a Todo App with Vue 3 and the Composition API, Pinia and Bootstrap',
        completed: false,
      },
    ],
  }),
  actions: {
    async fetchTodos() {
      const { data } = await TodoService.getTodos();
      this.todos = data;
    },
    async addTodo(newTodoText: string) {
      const newTodo = await TodoService.addTodo(newTodoText);
      this.todos.push(newTodo);
    },
    deleteTodoById(todoId: number) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
      console.log({ deleteTodoById: todoId, todos: this.todos });
    },
    toggleTodoStatus(todoId: number) {
      const todo = this.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
