import Request from './request';

import type {RequestConfig} from './request';

interface OwnRequestConfig<T> extends RequestConfig {
  data?: T;
}

interface OwnResponse<T> {
  statusCode: number;
  desc: string;
  result: T;
}

const requestInstance = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => config,
    // 响应拦截器
    responseInterceptors: result => result,
  },
});

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {OwnRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const request = <D = any, T = any>(config: OwnRequestConfig<D>) => {
  const {method = 'GET'} = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return requestInstance.request<OwnResponse<T>>(config);
};
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return requestInstance.cancelRequest(url);
};
// 取消全部请求
export const cancelAllRequest = () => {
  return requestInstance.cancelAllRequest();
};

export default request;
