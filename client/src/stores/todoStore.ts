import { TodoListStore } from '../types/Todo';
import { defineStore } from 'pinia';
import {
  addTodo,
  deleteTodoById,
  editTodoTitle,
  toggleCompletedTodo,
} from '../api/todosService';
import {
  addTodoList,
  deleteTodoListById,
  editTodoListTitle,
  getTodoLists,
} from '../api/todoListsService';

export const useTodoStore = defineStore('todoStore', {
  state: (): TodoListStore => ({
    todoLists: [],
  }),
  actions: {
    async fetchTodoLists() {
      try {
        const response = await getTodoLists();
        this.todoLists = response;
      } catch (error) {
        console.error(error);
      }
    },
    async addTodoList(title: string) {
      try {
        const response = await addTodoList(title);
        this.todoLists.push(response);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodoList(todoListId: number) {
      try {
        await deleteTodoListById(todoListId);
        this.todoLists = this.todoLists.filter(
          (todoList) => todoList.id !== todoListId
        );
      } catch (error) {
        console.error(error);
      }
    },
    async editTodoListTitle(todoListId: number, title: string) {
      try {
        const response = await editTodoListTitle(todoListId, title);
        this.todoLists = this.todoLists.map((todoList) =>
          todoList.id === todoListId ? response : todoList
        );
      } catch (error) {
        console.error(error);
      }
    },
    async addNewTodo(todoListId: number, title: string) {
      try {
        const response = await addTodo(todoListId, title);
        const list = await this.todoLists.find(
          (list) => list.id === todoListId
        );
        if (list) {
          list.todos.push(response);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodo(todoListId: number, todoId: number) {
      try {
        await deleteTodoById(todoListId, todoId);
        const list = this.todoLists.find((list) => list.id === todoListId);
        if (list) {
          list.todos = list.todos.filter((todo) => todo.id !== todoId);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async toggleTodo(todoListId: number, todoId: number, completed: boolean) {
      try {
        const response = await toggleCompletedTodo(
          todoListId,
          todoId,
          completed
        );
        const list = this.todoLists.find((list) => list.id === todoListId);
        if (list) {
          const index = list.todos.findIndex((todo) => todo.id === todoId);
          if (index !== -1) {
            list.todos[index] = response;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
    async editTodoTitle(todoListId: number, todoId: number, title: string) {
      try {
        const response = await editTodoTitle(todoListId, todoId, title);
        const list = this.todoLists.find((list) => list.id === todoListId);
        if (list) {
          const index = list.todos.findIndex((todo) => todo.id === todoId);
          if (index !== -1) {
            list.todos[index] = response;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
