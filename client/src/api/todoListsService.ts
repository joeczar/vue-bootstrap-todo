import { apiClient } from './apiClient';
import { TodoList } from '../types/Todo';

const route = '/todo_lists';

export const getTodoLists = async (): Promise<TodoList[]> => {
  try {
    const response = await apiClient.get(route);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get todo lists');
  }
};
export const getTodoListById = async (
  todoListId: number
): Promise<TodoList> => {
  try {
    const response = await apiClient.get(`${route}/${todoListId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to get todo list');
  }
};

export const addTodoList = async (title: string): Promise<TodoList> => {
  try {
    const response = await apiClient.post(route, {
      title,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to add todo list');
  }
};

export const deleteTodoListById = async (todoListId: number): Promise<void> => {
  try {
    const response = await apiClient.delete(`${route}/${todoListId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete todo list');
  }
};

export const editTodoListTitle = async (
  todoListId: number,
  title: string
): Promise<TodoList> => {
  try {
    const response = await apiClient.patch(`${route}/${todoListId}`, { title });
    return response.data;
  } catch (error) {
    throw new Error('Failed to edit todo list title');
  }
};
