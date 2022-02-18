const { Router } = require('express');
const turmaController = require('../controllers/TurmaController');

const router = Router(); 

router.get('/turmas', turmaController.pegaTodasAsTurmas);
router.get('/turmas/:id', turmaController.pegaUmTurma);
router.post('/turmas', turmaController.criaTurma);
router.put('/turmas/:id', turmaController.atualizaTurma);
router.delete('/turmas/:id', turmaController.apagaTurma);

module.exports = router;