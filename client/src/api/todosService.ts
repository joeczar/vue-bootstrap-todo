import { apiClient } from './apiClient';
import { Todo } from '../types/Todo';

export type NewTodoDTO = {
  title: string;
  completed: boolean;
};
export type TodoDTO = NewTodoDTO & {
  id: number;
  todo_list_id: number;
};

const getBaseRoute = (todoListId: number): string => {
  return `/todo_lists/${todoListId}/todos`;
};

export const addTodo = async (
  todoListId: number,
  title: string
): Promise<Todo> => {
  try {
    const route = getBaseRoute(todoListId);
    const response = await apiClient.post(route, {
      title,
      completed: false,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to add todo');
  }
};

export const deleteTodoById = async (
  todoListId: number,
  todoId: number
): Promise<void> => {
  try {
    const route = `${getBaseRoute(todoListId)}/${todoId}`;
    const response = await apiClient.delete(route);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete todo');
  }
};

export const toggleCompletedTodo = async (
  todoListId: number,
  todoId: number,
  completed: boolean
): Promise<Todo> => {
  try {
    const route = `${getBaseRoute(todoListId)}/${todoId}`;
    const response = await apiClient.patch(route, { completed });
    return response.data;
  } catch (error) {
    throw new Error('Failed to toggle todo status');
  }
};

export const editTodoTitle = async (
  todoListId: number,
  todoId: number,
  title: string
): Promise<Todo> => {
  try {
    const route = `${getBaseRoute(todoListId)}${todoId}`;
    const response = await apiClient.patch(route, { title });
    return response.data;
  } catch (error) {
    throw new Error('Failed to edit todo title');
  }
};
