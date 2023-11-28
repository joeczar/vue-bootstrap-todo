import axios, { AxiosInstance } from 'axios';

const createApiClient = (): AxiosInstance => {
  return axios.create({
    baseURL: 'http://localhost:3000', // Replace with your API base URL
    timeout: 5000, // Set the request timeout (in milliseconds)
    headers: {
      'Content-Type': 'application/json', // Set the default content type
    },
    withCredentials: true, // Send cookies when making cross-origin requests
  });
};

export const apiClient = createApiClient();
