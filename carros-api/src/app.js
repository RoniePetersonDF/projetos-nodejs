const express = require('express');

const CarrosDB = require('./models/CarrosDB');

const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send('API de carros');
});


app.post('/carros', (req, res) => {
  console.log(req.body);
  
  // const carro = {
  //   nome: req.body.nome,
  //   descricao: req.body.descricao,
  //   tipo: req.body.tipo,
  // };

  
  // CarrosDB.save((carro, result) => {
  //   res.json(result);
  // });
  res.send('post carros');
});

app.get('/carros', (req, res) => {
  CarrosDB.getCarros((carros) => {
    res.json(carros);
  });
});

app.get('/carros/tipos', (req, res) => {
  CarrosDB.getTiposCarros((tipos) => {
    res.json(tipos);
  });
});

app.get('/carros/:id', (req, res) => {
  const id = req.params.id;
  
  CarrosDB.getCarroById(id, (carro) => {
    res.json(carro);
  });
});


app.get('/carros/tipo/:tipo', (req, res) => {
  const tipo = req.params.tipo;
  
  CarrosDB.getCarrosByTipo(tipo, (carros) => {
    res.json(carros);
  });
});



app.listen(8000, () => console.log(`Server is running in http://localhost:8000`));