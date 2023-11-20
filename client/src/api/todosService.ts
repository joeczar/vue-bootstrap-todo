import { AxiosResponse } from 'axios';
import { apiClient } from './apiClient';
import { Todo, TodoUpdate } from '../types/Todo';

const getTodos = async (): Promise<AxiosResponse> => {
  return apiClient.get('/todos');
};

const addTodo = async (newTodoText: string): Promise<Todo> => {
  const { data } = await apiClient.post('/todos', {
    title: newTodoText,
    completed: false,
  });
  return data;
};

const deleteTodoById = async (todoId: string): Promise<AxiosResponse> => {
  return apiClient.delete(`/todos/${todoId}`);
};

const toggleCompleted = async (
  todoId: string,
  completed: boolean
): Promise<AxiosResponse> => {
  const updateData: TodoUpdate = { completed };
  return apiClient.patch(`/todos/${todoId}`, updateData);
};

const editTodoTitle = async (
  todoId: string,
  title: string
): Promise<AxiosResponse> => {
  const updateData: TodoUpdate = { title };
  return apiClient.patch(`/todos/${todoId}`, updateData);
};

export const TodoService = {
  getTodos,
  addTodo,
  deleteTodoById,
  toggleCompleted,
  editTodoTitle,
};
