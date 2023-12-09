import { Todo, TodoListStore } from '../types/Todo';
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
  getTodoListById,
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
    async fetchTodoListById(todoListId: number) {
      try {
        const response = await getTodoListById(todoListId);
        console.log('fetchTodoListById:', { todoListId, response });

        // Find the index of the todoList with the given id
        const index = this.todoLists.findIndex(
          (list) => list.id === todoListId
        );
        console.log('fetchTodoListById:', { index });
        // If found, replace the item at that index
        if (index !== -1) {
          this.todoLists.splice(index, 1, response);
        }
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
    async updateTodoList(todoListId: number, title: string) {
      try {
        const response = await editTodoListTitle(todoListId, title);
        const index = this.todoLists.findIndex(
          (todoList) => todoList.id === todoListId
        );
        if (index !== -1) {
          this.todoLists.splice(index, 1, response);
        }
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
        await this.fetchTodoListById(todoListId);
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
    addTempTodo(todoListId: number) {
      const tempTodo: Todo = {
        title: '',
        completed: false,
        temp: true,
      };
      try {
        const list = this.todoLists.find((list) => list.id === todoListId);
        if (list) {
          if (!list.todos) {
            list.todos = [];
            console.log('addTempTodo no todos:', { list });
          }
          console.log('addTempTodo:', { list });
          list.todos!.push(tempTodo);
        }
      } catch (error) {
        console.error(error);
      }
    },
    removeTempTodos(todoListId: number) {
      const list = this.todoLists.find((list) => list.id === todoListId);
      if (list) {
        list.todos = list.todos.filter((todo) => !todo.temp);
        this.todoLists = this.todoLists.map((list) =>
          list.id === todoListId ? list : list
        );
      }
    },
  },
});
