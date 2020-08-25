import {Router, Request, Response, NextFunction} from 'express';
import Crawler from './crawler'
import JianshuAnalyzer from './jianshuAnalyzer'
import fs from 'fs';
import path from 'path';
import { getResponseData } from './utils'
export interface Analyzer {
  analyze: (html: string, filePath: string) => string
}

interface RequestWithBody extends Request {
  body :{
    [key: string]: string | undefined
  }
}

const router = Router()

const checkLogin = (req: RequestWithBody, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : undefined
  if (isLogin) {
    next()
  } else {
    res.json(getResponseData(null, '请先登录'))
  }
}

router.get('/', (req: Request, res: Response) => {
  const isLogin = req.session ? req.session.login : undefined
  if (isLogin) {
    res.send(`
      <html>
        <body>
          <a href="/getData">爬取内容</a>
          <a href="/logout">退出</a>
        </body>
      </html>
    `)
  } else {
    res.send(`
      <html>
        <body>
          <form method="post" action="/login">
            <input type="password" name="password">
            <button type="submit">登录</button>
          </form>
        </body>
      </html>
    `)
  }
})
router.get('/logout', (req: RequestWithBody, res: Response) => {
  if (req.session) {
    req.session.login = undefined
  }
  // res.redirect('/')
  res.json(getResponseData(null))
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const {password} = req.body
  const isLogin = req.session ? req.session.login : undefined
  if (isLogin) {
    res.send('已经登录过')
    // res.json(getResponse Data(null, '已经登录过'))
  } else {
    if (password === '123' && req.session) {
      req.session.login = true
      res.send('登录成功')
    } else {
      res.send('登录失败')
    }
  }
})

router.get('/getData', checkLogin, (req: RequestWithBody, res: Response) => {
  const url = `https://www.jianshu.com/`
  const analyzer: Analyzer = JianshuAnalyzer.getInstance()
  new Crawler(url, analyzer)
  res.send('getData success')
 
})


router.get('/showData', checkLogin, (req: RequestWithBody, res: Response) => {
  const position = path.resolve(__dirname, '../data/course.json')
  const result = fs.readFileSync(position, 'utf-8')
  res.json(JSON.parse(result))
})

export default router; 