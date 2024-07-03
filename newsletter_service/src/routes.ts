import { Router } from 'express';
import InscricaoController from './interfaces/controllers/InscricaoController';

const router = Router();
const inscricaoController = new InscricaoController();


router.post('/inscricao', inscricaoController.cadastrar);
router.post('/descadastrar', inscricaoController.descadastrar);
router.get('/inscritos', inscricaoController.listarCadastrados);

export default router;
