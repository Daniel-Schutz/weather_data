import { Request, Response } from 'express';
import Inscricao from '../../infraestrutura/banco_dados/InscricaoModel'

class NotificacaoController {
    public async cadastrar(req: Request, res: Response): Promise<Response> {
        const { email, frequency } = req.body;

        try {
            const inscricao = await Inscricao.create({ email, frequency });
            return res.status(201).json(inscricao);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao cadastrar usuário!' });
        }
    }

    public async descadastrar(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;

        try {
            await Inscricao.destroy({ where: { email } });
            return res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao cadastrar usuário!' });
        }
    }

    public async listarCadastrados(req: Request, res: Response): Promise<Response> {
        try {
            const cadastrados = await Inscricao.findAll();
            return res.status(200).json(cadastrados);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar cadastrados!' });
        }
    }
}

export default new NotificacaoController();
