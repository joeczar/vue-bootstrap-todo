import { AxiosResponse } from 'axios';
import { apiClient } from './apiClient';

const route = '/todo_lists';

export const getTodoLists = async (): Promise<AxiosResponse> => {
  try {
    const response = await apiClient.get(route);
    return response;
  } catch (error) {
    throw new Error('Failed to get todo lists');
  }
};

export const addTodoList = async (
  newTodoListTitle: string
): Promise<AxiosResponse> => {
  try {
    const response = await apiClient.post(route, {
      title: newTodoListTitle,
    });
    return response;
  } catch (error) {
    throw new Error('Failed to add todo list');
  }
};

export const deleteTodoListById = async (
  todoListId: number
): Promise<AxiosResponse> => {
  try {
    const response = await apiClient.delete(`${route}/${todoListId}`);
    return response;
  } catch (error) {
    throw new Error('Failed to delete todo list');
  }
};

export const editTodoListTitle = async (
  todoListId: number,
  title: string
): Promise<AxiosResponse> => {
  try {
    const response = await apiClient.patch(`${route}/${todoListId}`, { title });
    return response;
  } catch (error) {
    throw new Error('Failed to edit todo list title');
  }
};
