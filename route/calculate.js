const express = require('express')
const route = express.route()


route.get('/', (req, res)=>{
  res.status(200).send('This is backend of Calculator.')
})


//加減乘除運算

module.exports = route