const database = require('../models');

class MatriculaController {
  
  static async pegaTodasAsMatriculas(req, res) {
    console.log('passei aqui');
    try {
      const todasAsMatriculas = await database.Matriculas.findAll();

      return res.status(200).json(todasAsMatriculas);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async pegaUmaMatricula(req, res) {
    const { id } = req.params;
    try {
      const umaMatricula = await database.Matriculas.findOne({
        where: { id : Number(id)}
      });
      return res.status(200).json(umaMatricula);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async criaMatricula(req, res) {
    const novaMatricula = req.body;
    try {
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
      
      return res.status(201).json(novaMatriculaCriada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async atualizaMatricula(req, res) {
    const { matricula_id, pessoa_id } = req.params;
    const novaInfo = {...req.body, pessoa_id};
    try {
      await database.Matriculas.update(novaInfo, { where: { id: Number(matricula_id)}});
      const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matricula_id)}});

      return res.status(200).json(matriculaAtualizada);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async apagaMatricula(req, res) {
    try {
      const { id } = req.params;
      try {
        await database.Matriculas.destroy({ where: { id: Number(id) }});

        return res.status(200).send({ message: `id ${id} deletado.`});
      } catch (error) {
        res.status(500).send(error.message);
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = MatriculaController