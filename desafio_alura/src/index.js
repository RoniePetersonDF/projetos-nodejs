const express = require('express');
const app = express();
const PORT = 3000;
const sequelize = require('./database');
const Receita = require('./models/receita');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.post('/receitas', async (req, res) => {
  const { descricao, valor, data} = req.body;
  const receita = await Receita.create({
    descricao, valor, data
  }); 
  res.status(201);
  res.send(receita.toJSON());
});

app.get('/receitas', async (req, res) => {
  const receitas = await Receita.findAll();
  res.send(receitas);
});

app.get('/receitas/:id', async (req, res) => {
  const id = req.params.id;
  const receita = await Receita.findOne({
    where: { id}
  });
  if(receita == null) {
    res.status(204);
    return;
  }
  res.send(receita);
});

app.listen(PORT, async ()=>{
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Connection has been established successfully.');
    console.log(`Server is running in http://localhost:${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});