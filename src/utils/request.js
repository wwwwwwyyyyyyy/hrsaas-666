import axios from "axios";

// 创建一个实例对象
const request = axios.create({
  baseURL: "", // url = base url + request url
  timeout: "", // request timeout
});

// 请求拦截器(request interceptor)
service.interceptors.request.use();

// 响应拦截器(response interceptor)
service.interceptors.response.use();

export default request;
