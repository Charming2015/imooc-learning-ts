"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var JianshuAnalyzer = /** @class */ (function () {
    function JianshuAnalyzer() {
    }
    JianshuAnalyzer.prototype.getJsonInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var list = $('ul.note-list');
        var refInfo = [];
        list[0].children.forEach(function (item) {
            var title = $(item).find('.title');
            var abstract = $(item).find('.abstract');
            if (title.text()) {
                refInfo.push({
                    title: title.text(),
                    link: title.attr('href'),
                    abstract: abstract.text(),
                });
            }
        });
        var result = {
            time: new Date().getTime(),
            data: refInfo
        };
        return result;
    };
    JianshuAnalyzer.getInstance = function () {
        if (!JianshuAnalyzer.instance) {
            JianshuAnalyzer.instance = new JianshuAnalyzer();
        }
        return JianshuAnalyzer.instance;
    };
    JianshuAnalyzer.prototype.generateJsonContent = function (data, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[data.time] = data.data;
        fs_1.default.writeFileSync(filePath, JSON.stringify(fileContent));
        return fileContent;
    };
    JianshuAnalyzer.prototype.analyze = function (html, filePath) {
        var courseInfo = this.getJsonInfo(html);
        var fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    };
    return JianshuAnalyzer;
}());
exports.default = JianshuAnalyzer;
