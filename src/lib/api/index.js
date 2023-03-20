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
    const errorMessage = error.response ? `서버 응답이 올바르지 않습니다. ${error.response.status}: ${error.response.data.message}` : error.message;
    return Promise.reject(new Error(errorMessage));
  },
);

export default instance;
