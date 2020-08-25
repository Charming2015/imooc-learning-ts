import { CrawlerController, LoginController } from '../controller';
export enum Methods {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete'
}

function getRequestDecorator(method: string) {
  return function (path: string) {
    return function(target: CrawlerController | LoginController, key: string) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  }
}
export const get = getRequestDecorator(Methods.get)
export const post = getRequestDecorator(Methods.post)
export const put = getRequestDecorator(Methods.put)
export const del = getRequestDecorator(Methods.delete)
