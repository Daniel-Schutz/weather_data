import { Router } from 'express';
import * as newsletterController from '../controllers/newsletterController';

const router = Router();

router.post('/api/inscricao', newsletterController.inscrever);
router.post('/api/descadastrar', newsletterController.descadastrar);
router.get('/api/inscritos', newsletterController.listarInscritos);
router.post('/api/enviar-boletim-climatico', newsletterController.enviarBoletimClimatico);

export default router;
