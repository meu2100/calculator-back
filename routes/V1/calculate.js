const { router } = require('express')
const { calculate } = require('../Service')
const router = router()

router.get('/', (req, res)=>{
  res.status(200).send('This is backend of Calculator.')
})


//透過引用service資料夾處理計算結果

module.exports = router