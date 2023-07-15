const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('되는거 맞지?');
});

app.listen(3000, (req, res) => {
  console.log('서버 동작');
});
