const { Router } = require('express');
const matriculaController = require('../controllers/MatriculaController');

const router = Router();

router.get('/matriculas', matriculaController.pegaTodasAsMatriculas);
router.get('/matriculas/:id', matriculaController.pegaUmaMatricula);
router.post('/matriculas', matriculaController.criaMatricula);
router.put('/matriculas/:matricula_id/pessoa/:pessoa_id', matriculaController.atualizaMatricula);
router.delete('/matriculas/:id', matriculaController.apagaMatricula);

module.exports = router;