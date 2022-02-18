const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/aprendendo")
  .then(function() {
    console.log('conexão estabelecida')
  })
  .catch((error)=>{
    console.error('Erro ao conectar ao banco de dados: ' + error)
  });

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true
  }, 
  lastName: {
    type: String,
    require: true
  }, 
  email: {
    type: String,
    require: true
  }, 
  age: {
    type: Number
  }, 
  country: String
});

const User = mongoose.model('User', userSchema);

const user = new User({
  firstName: 'Ronie',
  lastName: 'Santos',
  email: 'email@gmail.com',
  age: 199,
  country: 'Brasil'
});
user.save()
  .then(()=>{
    console.info('Usuário cadastrado com sucesso.')
  })
  .catch((err) => {
    console.error('Erro ao salvar usuário. ' + err)
  });