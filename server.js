const express = require('express');
const request = require('request');

const app = express();

app.use(express.json());

app.all('*', (req, res) => {
  const url = `https://api.whatsapp.com${req.url}`;
  req.pipe(request(url)).pipe(res);
});

app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});
