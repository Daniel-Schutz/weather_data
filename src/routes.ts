import { Router } from 'express';
import DadosClimaticosController from './interfaces/controllers/DadosClimaticosController';

const router = Router();

router.post('/coletar-dados', DadosClimaticosController.coletarDados);
router.get('/dados-climaticos', DadosClimaticosController.listarDados);

export default router;
