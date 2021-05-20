import axios from 'axios'
import { JWT } from './localStorage.js'

const apiInfo = {
  url: 'https://vue3-course-api.hexschool.io/',
  path: 'hsuifangfangfang',
}

const AxiosInstance = axios.create({
  baseURL: apiInfo.url,
})

AxiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = JWT.getToken()
    return config
  },
  (err) => {
    if (err && err.response) {
      return Promise.reject(err)
    } else {
      return Promise.reject(err.response)
    }
  }
)

AxiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    return Promise.reject(err.response)
  }
)

export default function (method, url, data = null) {
  const requestMethod = method.toLowerCase()
  if (requestMethod === 'post') {
    return AxiosInstance.post(url, data)
  } else if (requestMethod === 'get') {
    return AxiosInstance.get(url, { params: data })
  } else if (requestMethod === 'delete') {
    return AxiosInstance.delete(url)
  } else {
    console.error(`未知method: ${method}`)
  }
}

export const apiPath = apiInfo.path
