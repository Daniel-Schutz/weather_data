import { Router } from 'express';
import DadosClimaticosController from './interfaces/controllers/DadosClimaticosController';

const router = Router();
const dadosClimaticosController = new DadosClimaticosController();

// Rotas para dados climaticos
router.post('/coletar-dados', dadosClimaticosController.coletarDados);
router.get('/dados-climaticos', dadosClimaticosController.listarDados);


export default router;
