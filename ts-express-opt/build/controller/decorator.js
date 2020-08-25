"use strict";
// import 'reflect-metadata';
// import {RequestHandler} from 'express'
// enum Methods {
//   get = 'get',
//   post = 'post',
//   put = 'put',
//   delete = 'delete'
// }
// function getRequestDecorator(method: string) {
//   return function (path: string) {
//     return function(target: any, key: string) {
//       Reflect.defineMetadata('path', path, target, key);
//       Reflect.defineMetadata('method', method, target, key);
//     };
//   }
// }
// export const get = getRequestDecorator(Methods.get)
// export const post = getRequestDecorator(Methods.post)
// export const put = getRequestDecorator(Methods.put)
// export const del = getRequestDecorator(Methods.delete)
// export function get(path: string) {
//   return function(target: any, key: string) {
//     Reflect.defineMetadata('path', path, target, key);
//     Reflect.defineMetadata('method', 'get', target, key);
//   };
// }
// export function put(path: string) {
//   return function(target: any, key: string) {
//     Reflect.defineMetadata('path', path, target, key);
//     Reflect.defineMetadata('method', 'put', target, key);
//   };
// }
// export function post(path: string) {
//   return function(target: any, key: string) {
//     Reflect.defineMetadata('path', path, target, key);
//     Reflect.defineMetadata('method', 'post', target, key);
//   };
// }
