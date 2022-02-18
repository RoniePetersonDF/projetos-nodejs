const database = require('../models');

class TurmaController {
  
  static async pegaTodasAsTurmas(req, res) {
    try {
      const todosAsTurmas = await database.Turmas.findAll();

      return res.status(200).json(todosAsTurmas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async pegaUmTurma(req, res) {
    const { id } = req.params;
    try {
      const umaTurma = await database.Turmas.findOne({
        where: { id : Number(id)}
      });
      return res.status(200).json(umaTurma);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async criaTurma(req, res) {
    const novaTurma = req.body;
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma);
      
      return res.status(201).json(novaTurmaCriada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async atualizaTurma(req, res) {
    const { id } = req.params;
    const novaInfo = req.body;
    try {
      await database.Turmas.update(novaInfo, { where: { id: Number(id)}});
      const turmaAtualizada = await database.Turmas.findOne({ where: { id: Number(id)}});

      return res.status(200).json(turmaAtualizada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async apagaTurma(req, res) {
    try {
      const { id } = req.params;
      try {
        await database.Turmas.destroy({ where: { id: Number(id) }});

        return res.status(200).send({ message: `id ${id} deletado.`});
      } catch (error) {
        res.status(500).send(error.message);
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController