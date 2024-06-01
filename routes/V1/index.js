//建立基本路由
const { router } = require('express')
const router = router()

//設定路由回傳計算結果
const calculate = require('./calculate')
router.use('/calculate', calculate)

module.exports = router;