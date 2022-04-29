const express = require('express');

const CarrosDB = require('./models/CarrosDB');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de carros');
});


app.get('/carros', (req, res) => {
  CarrosDB.getCarros((carros) => {
    res.json(carros);
  });
});

app.post('/carros', (req, res) => {
  const carro = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    tipo: req.body.tipo,
    url_foto: req.body.url_foto,
    url_video: req.body.url_video,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };

  CarrosDB.save(carro, (result) => {
    res.json(result);
  });
});

app.put('/carros/:id', (req, res) => {
  const id = req.params.id;
  
  const carro = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    tipo: req.body.tipo,
    url_foto: req.body.url_foto,
    url_video: req.body.url_video,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };

  CarrosDB.update(carro, id, (result) => {
    res.json(result);
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