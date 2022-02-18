const { Router } = require('express');
const nivelController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', nivelController.pegaTodosOsNiveis);
router.get('/niveis/:id', nivelController.pegaUmNivel);
router.post('/niveis', nivelController.criaNivel);
router.put('/niveis/:id', nivelController.atualizaNivel);
router.delete('/niveis/:id', nivelController.apagaNivel);

module.exports = router;