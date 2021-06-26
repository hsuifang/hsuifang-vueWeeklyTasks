import axios from 'axios';

import JWT from './cookies';

const AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const tokenParams = 'Authorization';
    const reqConfig = config;
    reqConfig.headers[tokenParams] = JWT.getToken();
    return reqConfig;
  },
  (err) => {
    if (err && err.response) {
      return Promise.reject(err);
    }
    return Promise.reject(err.response);
  },
);

AxiosInstance.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err.response),
);

export default function requestInstance(method, url, data = null) {
  const requestMethod = method.toLowerCase();
  switch (requestMethod) {
    case 'post':
      return AxiosInstance.post(url, data);
    case 'get':
      return AxiosInstance.get(url, { params: data });
    case 'delete':
      return AxiosInstance.delete(url);
    case 'put':
      return AxiosInstance.put(url, data);
    case 'form':
      return AxiosInstance.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    default:
      return () => console.log(`未知method: ${method}`);
  }
}
