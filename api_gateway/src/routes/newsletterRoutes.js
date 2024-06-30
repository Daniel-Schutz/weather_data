const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

router.post('/api/inscricao', newsletterController.inscrever);
router.post('/api/descadastrar', newsletterController.descadastrar);
router.get('/api/inscritos', newsletterController.listarInscritos);
router.post('/api/enviar-boletim-climatico', newsletterController.enviarBoletimClimatico);

module.exports = router;
