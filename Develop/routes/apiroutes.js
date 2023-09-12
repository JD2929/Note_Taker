const router = require('express').Router();
const fs = require ('fs');


//goes along with the fetch in index.js on line 29
router.get('/api/notes', (req, res) =>{
    fs.readFile("db/db.json", "utf-8", (err,data) => {
        if(err) throw err
        return res.json(JSON.parse(data))
    })
});

//goes along with the fetch in index.js on line 37

//app.post


//goes along with the fetch in index.js on line 46

//app.delete

module.exports = router;
