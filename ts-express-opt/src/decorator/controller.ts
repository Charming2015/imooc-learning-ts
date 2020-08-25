import router from '../router'
import {RequestHandler} from 'express'
import { Methods } from './request'

export function controller(root: string) {
  return function (target: new (...arg: any[]) => any ) {
    for (let key in target.prototype) {
      // console.log(Reflect.getMetadata('path', target.prototype, key));
      const path: string = Reflect.getMetadata('path', target.prototype, key)
      const method: Methods = Reflect.getMetadata('method', target.prototype, key)
      const handler: any = target.prototype[key]
      const middleware: RequestHandler[] = Reflect.getMetadata('middleware', target.prototype, key)
      if (path && method) {
        const fullPath = root === '/' ? path : `${root}${path}`
        if (middleware && middleware.length) {
          router[method](fullPath, ...middleware, handler)
        } else {
          router[method](fullPath, handler)
        }
      }
    }
  }
}

