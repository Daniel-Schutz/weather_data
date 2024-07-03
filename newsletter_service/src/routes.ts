import { Router } from 'express';
import InscricaoController from './interfaces/controllers/InscricaoController';
import EmailController from './interfaces/controllers/EmailController';
const router = Router();
const inscricaoController = new InscricaoController();
const emailController = new EmailController();

router.post('/inscricao', inscricaoController.cadastrar);
router.post('/descadastrar', inscricaoController.descadastrar);
router.get('/inscritos', inscricaoController.listarCadastrados);
router.post('/enviar-boletim-climatico',emailController.enviarBoletinsClimaticos)
export default router;
