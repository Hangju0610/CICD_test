const express = require('express');
const a = require('./');
const app = express();

app.get('/', (req, res) => {
  res.send('제발 되라!');
});

app.listen(3000, (req, res) => {
  console.log('서버 동작');
});
