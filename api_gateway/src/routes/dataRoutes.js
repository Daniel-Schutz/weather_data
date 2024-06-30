const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/api/coletar-dados', dataController.coletarDados);
router.get('/api/dados-climaticos', dataController.listarDadosClimaticos);

module.exports = router;
