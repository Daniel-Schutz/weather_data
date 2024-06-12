import { Router } from 'express';
import DadosClimaticosController from './interfaces/controllers/DadosClimaticosController';
import NotificacaoController from './interfaces/controllers/NotificacaoController';

const router = Router();
const dadosClimaticosController = new DadosClimaticosController();
const notificacaoController = new NotificacaoController();

// Rotas para dados climaticos
router.post('/coletar-dados', dadosClimaticosController.coletarDados);
router.get('/listar-dados', dadosClimaticosController.listarDados);

// Rotas para notificações
router.post('/cadastrar', notificacaoController.cadastrar);
router.post('/descadrastar', notificacaoController.descadastrar);
router.get('/inscritos', notificacaoController.listarCadastrados);

export default router;
