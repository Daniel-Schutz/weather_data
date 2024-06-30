import { Router } from 'express';
import * as dataController from '../controllers/dataController';

const router = Router();

router.post('/api/coletar-dados', dataController.coletarDados);
router.get('/api/dados-climaticos', dataController.listarDadosClimaticos);

export default router;
