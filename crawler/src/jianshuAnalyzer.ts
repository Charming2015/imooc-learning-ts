import cheerio from 'cheerio'
import fs from 'fs'
import { Analyzer } from './crawler'
interface ResInfo {
  title: string;
  link: string | undefined;
  abstract: string;
}

interface CourseResult {
  time: number;
  data: ResInfo[]
}
interface Content {
  [propName: number]: ResInfo[]
}

class JianshuAnalyzer implements Analyzer {
  private static instance: JianshuAnalyzer
  private getJsonInfo(html: string) {
    const $ = cheerio.load(html)
    const list = $('ul.note-list')
    let refInfo: ResInfo[] = []
    list[0].children.forEach((item: CheerioElement) => {
      const title = $(item).find('.title')
      const abstract = $(item).find('.abstract')
      if (title.text()) {
        refInfo.push({
          title: title.text(),
          link: title.attr('href'),
          abstract: abstract.text(),
        })
      }
    })
    const result = {
      time: new Date().getTime(),
      data: refInfo
    }
    return result
  }
  static getInstance() {
    if(!JianshuAnalyzer.instance) {
      JianshuAnalyzer.instance = new JianshuAnalyzer()
    }
    return JianshuAnalyzer.instance
  }
  private generateJsonContent(data: CourseResult, filePath: string) {
    let fileContent: Content = {}
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }
    fileContent[data.time] = data.data
    fs.writeFileSync(filePath, JSON.stringify(fileContent))
    return fileContent
  }
  public analyze(html: string, filePath: string) {
    const courseInfo = this.getJsonInfo(html)
    const fileContent = this.generateJsonContent(courseInfo, filePath)
    return JSON.stringify(fileContent)
  }

  private constructor() {}
}

export default JianshuAnalyzer