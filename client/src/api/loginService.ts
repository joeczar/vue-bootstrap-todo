import { AxiosResponse } from 'axios';
import { apiClient } from './apiClient';

export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface UserResponse extends AxiosResponse {
  user: User;
}

const loginUser = async (userLogin: UserLogin): Promise<UserResponse> => {
  try {
    const response = await apiClient.post('/sessions', {
      user: userLogin,
    });
    console.log('user:', response.data.user);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

const checkLoggedIn = async () => {
  try {
    const response = await apiClient.get('/logged_in');
    if (response.data.logged_in) {
      return response.data;
    } else {
      console.log('logged_in: false');
      return { logged_in: false };
    }
  } catch (error) {
    console.error('Check logged in failed:', error);
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await apiClient.delete('/logout');
    console.log('logged_out: true');
    return response.data;
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};

export { loginUser, checkLoggedIn, logout };
