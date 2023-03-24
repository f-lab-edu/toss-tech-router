import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(new CustomError(error.message));
  },
);

export class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

export const handleErrorResponse = (error) => {
  if (error instanceof CustomError) {
    console.log('CustomError: ', error.name, error.message);
    return;
  }
  console.log('Error: ', error?.message);
};

export default instance;
