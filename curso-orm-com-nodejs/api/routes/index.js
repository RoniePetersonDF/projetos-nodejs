const express = require('express');
const pessoaRouter = require('../routes/pessoasRoute');
const nivelRouter = require('../routes/niveisRoute');
const turmaRouter = require('../routes/turmasRoute');
const matriculaRouter = require('../routes/matriculasRoute');

module.exports = app => {
  app.use(express.json());
  app.use(pessoaRouter, nivelRouter, turmaRouter, matriculaRouter);

  app.get('/', (req, res) => {
    res
      .status(200)
      .send({
        message: 'Boas-vindas à API'
      });
  });
  
}
