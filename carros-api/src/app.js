const express = require('express');
const CarrosDB = require('./models/CarrosDB');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('API de carros');
});

app.get('/carros', (req, res) => {
  CarrosDB.getCarros((carros) => {
    res.json(carros);
  });
});

app.get('/carros/:tipo', (req, res) => {
  const tipo = req.params.tipo;
  res.send('Lista de carros: ' + tipo);
});


app.listen(8000, () => console.log(`Server is running in http://localhost:8000`));