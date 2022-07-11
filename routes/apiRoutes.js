const router = require('express').Router();
const fs = require('fs');
const db = require('../Develop/db/db.json')

router.get('/api/notes', (req, res) => {
    fs.readFile(db, (err, data) => {
        if (err) throw err;
        var note = JSON.parse(data);
        res.json(note);
    });
});

router.post('/api/notes', (req, res) => {
    fs.readFile(db, (err, data) => {
        if (err) throw err;

        var note = JSON.parse(data);
        const noteRequest = req.body;
        const newNote = {
            title: noteRequest.title,
            text: noteRequest.text
        };

        note.push(newNote);
        res.json(newNote);
        fs.writeFile(db, JSON.stringify(note), (err) => {
            if (err) throw err;

            res.send('successfully added');
        })
    });
});

module.exports = router;