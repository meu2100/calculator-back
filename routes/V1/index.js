//建立基本路由
const express = require('express')
const router = express.route()

//設定路由回傳計算結果
const calculate = require('./calculate')
router.use('/calculate', calculate)

module.exports = router;