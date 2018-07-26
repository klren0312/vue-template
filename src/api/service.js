import axios from 'axios'

const Instance = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
  timeout: 10000
})

// http request 拦截器
Instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
// 过滤请求过来的数据
Instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      let data = response.data.data
      return data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default Instance