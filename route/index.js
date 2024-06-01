//建立基本路由
const express = require('express')
const route = express.route()

//設定路由回傳計算結果
const calculate = require('./calculate')
route.use('/calculate', calculate)

module.exports = route;