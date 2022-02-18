const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/aprendendo")
  .then(function() {
    console.log('conexão estabelecida')
  })
  .catch((error)=>{
    console.error('Erro ao conectar ao banco de dados: ' + error)
  });
module.exports = mongoose;