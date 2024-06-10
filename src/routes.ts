import { Router } from 'express';
import DadosClimaticosController from './interfaces/controllers/DadosClimaticosController';
import NotificationController from './interfaces/controllers/NotificacaoController';

const router = Router();
const dadosClimaticosController = new DadosClimaticosController();

// Rotas para dados climaticos
router.post('/coletar-dados', dadosClimaticosController.coletarDados);
router.get('/listar-dados', dadosClimaticosController.listarDados);

// Rotas para notificações
router.post('/subscribe', NotificationController.cadastrar);
router.post('/unsubscribe', NotificationController.descadastrar);
router.get('/subscribers', NotificationController.listarCadastrados);

export default router;
