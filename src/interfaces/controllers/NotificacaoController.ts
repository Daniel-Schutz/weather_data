import { Request, Response } from 'express';
import InscricaoService from '@src/dominio/servicos/InscricaoService';

class NotificacaoController {
    private inscricaoService: InscricaoService;
  
    constructor() {
      this.inscricaoService = new InscricaoService();
    }

    public cadastrar = async (req: Request, res: Response): Promise<Response> => {
        try {
          const { email, frequencia } = req.body;
          if (!email || !frequencia) {
            return res.status(400).json({ error: 'Email e frequência são obrigatórios' });
          }
          const inscricao = await this.inscricaoService.cadastrar(email, frequencia);
          return res.status(201).json(inscricao);
        } catch (error) {
          return res.status(500).json({ error });
        }
      }
    
      public descadastrar = async (req: Request, res: Response): Promise<Response> => {
        try {
          const { email } = req.body;
          if (!email) {
            return res.status(400).json({ error: 'Email é obrigatório' });
          }
          await this.inscricaoService.descadastrar(email);
          return res.status(200).json({ message: 'Inscrição cancelada com sucesso' });
        } catch (error) {
          return res.status(500).json({ error });
        }
      }
    
      public listarCadastrados = async (req: Request, res: Response): Promise<Response> => {
        try {
          const inscritos = await this.inscricaoService.listarCadastados();
          return res.status(200).json(inscritos);
        } catch (error) {
          return res.status(500).json({ error });
        }
      }
    }
    
    export default NotificacaoController;