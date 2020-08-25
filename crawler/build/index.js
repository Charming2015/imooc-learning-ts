"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
// 问题1：express库的类型定义文件.d.ts文件类型描述不准确
// done: 扩折Request
// 问题2：修改reg或者res之后，实际上类型并没有改变，应用时会出错
app.use(function (req, res, next) {
    req.teacherName = 'charming';
    next();
});
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(router_1.default);
app.listen(7001, function () {
    console.log('server is running');
});
