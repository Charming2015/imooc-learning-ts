import express from 'express';
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import router from './router'
const app = express()

// 问题1：express库的类型定义文件.d.ts文件类型描述不准确
  // done: 扩折Request
// 问题2：修改reg或者res之后，实际上类型并没有改变，应用时会出错

app.use(cookieSession({
  name: 'session',
  keys: ['teacher charming'],
  maxAge: 24 * 60 * 60 * 1000 //  24 hour
}))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)
app.listen(7001, () => {
  console.log('server is running')
})