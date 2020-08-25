"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
    Methods["put"] = "put";
    Methods["delete"] = "delete";
})(Methods = exports.Methods || (exports.Methods = {}));
function getRequestDecorator(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = getRequestDecorator(Methods.get);
exports.post = getRequestDecorator(Methods.post);
exports.put = getRequestDecorator(Methods.put);
exports.del = getRequestDecorator(Methods.delete);
