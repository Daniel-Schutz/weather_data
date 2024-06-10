import { Router } from 'express';
import DadosClimaticosController from './interfaces/controllers/DadosClimaticosController';
import NotificationController from './interfaces/controllers/NotificacaoController';

const router = Router();
const dadosClimaticosController = new DadosClimaticosController();

// Rotas para dados climaticos
router.post('/coletar-dados', dadosClimaticosController.coletarDados);
router.get('/listar-dados', dadosClimaticosController.listarDados);

// Rotas para notificações
router.post('/cadastrar', NotificationController.cadastrar);
router.post('/descadrastar', NotificationController.descadastrar);
router.get('/inscritos', NotificationController.listarCadastrados);

export default router;
