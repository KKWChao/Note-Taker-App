const express = require('express')
const router = express.Router()
const { notes } = require('../../db/db.json')

router.get('/', (req, res) => {
  res.send('hello')
})

router.get('/:id', (req, res) => {
  
})

router.post('/', (req, res) => {
  
})

router.put('/:id', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
  
})


module.exports = router