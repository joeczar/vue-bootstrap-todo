import { apiClient } from './apiClient';

interface User {
  email: string;
  password: string;
  password_confirmation: string;
}

export async function createUser(user: User): Promise<any> {
  try {
    const response = await apiClient.post('/registrations', { user });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create user');
  }
}
