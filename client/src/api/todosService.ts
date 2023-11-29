import { AxiosResponse } from 'axios';
import { apiClient } from './apiClient';
import { Todo, TodoUpdate } from '../types/Todo';

const route = '/todos';

const getTodos = async (): Promise<AxiosResponse> => {
  return apiClient.get(route);
};

const addTodo = async (newTodoText: string): Promise<Todo> => {
  const { data } = await apiClient.post(route, {
    title: newTodoText,
    completed: false,
  });
  return data;
};

const deleteTodoById = async (todoId: number): Promise<AxiosResponse> => {
  return apiClient.delete(`${route}/${todoId}`);
};

const toggleCompleted = async (
  todoId: string,
  completed: boolean
): Promise<AxiosResponse> => {
  const updateData: TodoUpdate = { completed };
  return apiClient.patch(`${route}/${todoId}`, updateData);
};

const editTodoTitle = async (
  todoId: string,
  title: string
): Promise<AxiosResponse> => {
  const updateData: TodoUpdate = { title };
  return apiClient.patch(`${route}/${todoId}`, updateData);
};

export const TodoService = {
  getTodos,
  addTodo,
  deleteTodoById,
  toggleCompleted,
  editTodoTitle,
};
