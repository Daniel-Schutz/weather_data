import { Router } from 'express';
import InscricaoController from './interfaces/controllers/InscricaoController';

const router = Router();
const inscricaoController = new InscricaoController();


router.post('/cadastrar', inscricaoController.cadastrar);
router.post('/descadrastar', inscricaoController.descadastrar);
router.get('/inscritos', inscricaoController.listarCadastrados);

export default router;
