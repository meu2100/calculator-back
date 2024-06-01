// 引用 Express 與 Express 路由器
const { Router } = require('express')
const router = Router()

// 準備引入路由模組
const calculation = require('./calculation')
router.use('/calculation', calculation)

// 匯出路由器
module.exports = router