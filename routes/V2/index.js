//引用express
const { router } = require('express')

//建立根路由
const router = router()

const V1 = require('./V1')
router.use('/V1', V1)

const V2 = require('./V2')
router.use('/V2', V2)

// 匯出路由器
module.exports = router