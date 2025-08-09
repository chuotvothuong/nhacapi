const express = require('express');
const app = express();
const port = 3000;
const musicData = require('./music.json');

app.get('/api/music', (req, res) => {
  res.json(musicData);
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
