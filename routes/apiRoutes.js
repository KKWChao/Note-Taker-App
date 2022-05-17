const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require("uuid");

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../db/db.json'))
})

router.post('/', (req, res) => {
  let db = JSON.parse(fs.readFileSync('./db/db.json'))
  res.json(db)

  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4()
  }
  db.push(newNote)
  fs.writeFileSync('./db/db.json', JSON.stringify(db))
  res.json(db)
})

module.exports = router