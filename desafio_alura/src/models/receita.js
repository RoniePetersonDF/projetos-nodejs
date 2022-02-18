const { DataTypes } = require('sequelize');
const database = require('../database');
const sequelize = database;

const Receita = sequelize.define('Receita', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,    
  },
  valor: {
    type: DataTypes.DOUBLE,
    allowNull: false,    
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,    
  },
}, {
  tableName: 'receitas'
});

module.exports = Receita