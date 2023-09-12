const router = require('express').Router();
const fs = require ('fs');
const uniqid = require('uniqid');


router.get('/api/notes', (req, res) =>{
    fs.readFile("db/db.json", "utf-8", (err,data) => {
        if(err) throw err
        return res.json(JSON.parse(data))
    })
});



router.post('/api/notes', (req, res) => {
    const noteDb = JSON.parse(fs.readFileSync("db/db.json"))
    const newNote = req.body
    newNote.id = uniqid()
    noteDb.push(newNote)
    fs.writeFileSync('db/db.json', JSON.stringify(noteDb))
    res.json(noteDb)
});



router.delete('/api/notes/:id', (req, res) => {
    const noteDb = JSON.parse(fs.readFileSync("db/db.json")) 
    const deleteNote = noteDb.filter ((removeNote) => removeNote.id !==req.params.id) 
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote))
    res.json(deleteNote)
})
module.exports = router;
