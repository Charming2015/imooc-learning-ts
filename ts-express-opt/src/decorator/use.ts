import { CrawlerController, LoginController } from '../controller';
import {RequestHandler} from 'express'
export function use(middleware: RequestHandler) {
  return function (target: CrawlerController | LoginController, key: string) {
    const originMiddleware = Reflect.getMetadata('middleware', target, key) || [];
    originMiddleware.push(middleware)
    Reflect.defineMetadata('middleware', originMiddleware, target, key);
  }
}