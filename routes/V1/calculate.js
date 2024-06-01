<<<<<<< HEAD
const { router } = require('express')
const { calculate } = require('../Service')
const router = router()
=======
const express = require('express')
const router = express.route()

>>>>>>> ef40f8a70b49611c64834b037ce17b064e3d5994

router.get('/', (req, res)=>{
  res.status(200).send('This is backend of Calculator.')
})


//透過引用service資料夾處理計算結果

module.exports = router