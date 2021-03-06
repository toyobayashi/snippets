import { AxiosRequestConfig } from 'axios'

declare class Client {
  get <T = any>(url: string, query?: { [param: string]: string }, config?: AxiosRequestConfig): Promise<T>;
  head <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

declare const client: Client;

export default client;
