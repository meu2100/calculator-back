const express = require('express')
const route = express.route()


route.get('/', (req, res)=>{
  res.status(200).send('This is backend of Calculator.')
})


route.get('/add', (req, res) => {
  const query = req.query
  const v1 = Number(query.v1)
  const v2 = Number(query.v2)
  res.json({
    answer: v1 + v2,
  })
})

route.get('/minus', (req, res) => {
  const query = req.query
  const v1 = Number(query.v1)
  const v2 = Number(query.v2)
  res.json({
    answer: v1 - v2,
  })
})

route.get('/multiply', (req, res) => {
  const query = req.query
  const v1 = Number(query.v1)
  const v2 = Number(query.v2)
  res.json({
    answer: v1 * v2,
  })
})

route.get('/divide', (req, res) => {
  const query = req.query
  const v1 = Number(query.v1)
  const v2 = Number(query.v2)
  // 預設只保留小數點後 ROUND 位
  const answer = Number((v1 / v2).toFixed(ROUND))
  res.json({
    answer,
  })
})