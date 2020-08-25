// ts -> .d.ts 翻译文件:@types/superagent -> js
import superagent from 'superagent'
import fs from 'fs'
import path from 'path'
// import JianshuAnalyzer from './jianshuAnalyzer'
export interface Analyzer {
  analyze: (html: string, filePath: string) => string
}
class Crawler {
  private filePath = path.resolve(__dirname, '../data/course.json')

  private async getRawHtml() {
    const result = await superagent.get(this.url)
    return result.text
  }

  private async initSpiderProcess() {
    const html = await this.getRawHtml()
    const fileContent = this.analyzer.analyze(html, this.filePath)
    this.writeFile(fileContent)
  }

  
  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content)
  }
  constructor(private url: string, private analyzer: Analyzer) {
    this.url = url
    this.analyzer = analyzer
    this.initSpiderProcess()
  }
}
export default Crawler
// const url = `https://www.jianshu.com/`
// const analyzer: Analyzer = JianshuAnalyzer.getInstance()
// const crawler = new Crawler(url, analyzer)