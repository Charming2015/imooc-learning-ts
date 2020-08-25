"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function use(middleware) {
    return function (target, key) {
        var originMiddleware = Reflect.getMetadata('middleware', target, key) || [];
        originMiddleware.push(middleware);
        Reflect.defineMetadata('middleware', originMiddleware, target, key);
    };
}
exports.use = use;
