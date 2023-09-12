const router = require('express').Router();
const fs = require ('fs');
const uniqid = require('uniqid');

//goes along with the fetch in index.js on line 29
router.get('/api/notes', (req, res) =>{
    fs.readFile("db/db.json", "utf-8", (err,data) => {
        if(err) throw err
        return res.json(JSON.parse(data))
    })
});

//goes along with the fetch in index.js on line 37

router.post('/api/notes', (req, res) => {
    const noteDb = JSON.parse(fs.readFileSync("db/db.json"))
    const newNote = req.body
    newNote.id = uniqid()
    noteDb.push(newNote)
    fs.writeFileSync('db/db.json', JSON.stringify(noteDb))
    res.json(noteDb)
});

//goes along with the fetch in index.js on line 46

//app.delete

module.exports = router;
