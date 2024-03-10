// 引用後端框架 express
const express = require('express')

// 建立 express 實例
const app = express()

// 設置監聽的 port (後端 URL 會是 localhost:[PORT])
const PORT = 3000

// 處理 GET localhost:[PORT] 的請求(註：localhost:[PORT] 和 localhost:[PORT]/ 是等價的，結尾有無 / 都一樣)
// req: 前端發送來的請求物件
// res: 前端發送來的請求物件
app.get('/', (req, res) => {
  // 以字串形式返回
  res.send('This is backend of Calculator.')
})

app.listen(PORT, () => {
  console.log(`express server is running on http://localhost:${PORT}`)
})
