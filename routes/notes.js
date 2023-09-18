const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs');

// GET request to '/api/notes'
router.get('/api/notes', async (req, res) => {
  const jsonData = await JSON.parse(fs.readFileSync('db/db.json','utf8'));
  res.json(jsonData);
});

// POST request to '/api/notes'
router.post('/api/notes', (req, res) => {
  const jsonData = JSON.parse(fs.readFileSync('db/db.json','utf8'));
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  jsonData.push(newNote);
  fs.writeFileSync('db/db.json',JSON.stringify(jsonData));
  res.json(jsonData);
  console.log('Note added.')
});

// DELETE request to '/api/notes' by id
router.delete('/api/notes/:id', (req, res) => {
  let data = fs.readFileSync('db/db.json', 'utf8');
  const jsonData =  JSON.parse(data);
  const newNotes = jsonData.filter((note) => { 
    return note.id !== req.params.id;
  });
  fs.writeFileSync('db/db.json',JSON.stringify(newNotes));
  res.json(jsonData);
  console.log('Note deleted.')
});

module.exports = router; 
