const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

// GET request to '/api/notes'
router.get('/api/notes', (req, res) => {
  const jsonData = data
  res.json(jsonData);
});

// POST request to '/api/notes'
router.post('/api/notes', (req, res) => {
  const jsonData = data
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  jsonData.push(newNote);
  res.json(jsonData);
});


router.delete('/api/notes/:id', (req, res) => {
  const jsonData = data
  res.json("Note deleted.");
});

module.exports = router; 
