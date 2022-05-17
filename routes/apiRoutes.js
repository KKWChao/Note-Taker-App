const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

router.post("/notes", (req, res) => {
  let db = JSON.parse(fs.readFileSync("./db/db.json"));

  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };

  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
  console.log("add new note");
  res.json(db);
});

router.delete("/notes/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db/db.json"));

  let deleteNote = data.filter((data) => 
    data.id.toString() !== req.params.id.toString()
  );

  fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
  res.json(deleteNote);
});

module.exports = router;
