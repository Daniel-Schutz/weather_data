import { Request, Response } from 'express';
import EmailService from '../../dominio/servicos/EmailService';  // Ajuste o caminho conforme necessário
import InscricaoService from '../../dominio/servicos/InscricaoService';
import Inscricao from '../../dominio/entidades/Inscricao';
import RepositorioDadosClimaticos from '../../../../weather_service/src/dominio/repositorios/RepositorioDadosClimaticos'; 
class EmailController {
    private emailService: EmailService;
    private inscricaoService: InscricaoService;

    constructor() {
        const repositorioDadosClimaticos = new RepositorioDadosClimaticos()
        this.emailService = new EmailService(repositorioDadosClimaticos);
        this.inscricaoService = new InscricaoService();
    }

    public enviarBoletinsClimaticos = async (req: Request, res: Response): Promise<Response> => {
        try {
            const inscritos: Inscricao[] = await this.inscricaoService.listarCadastados();  // Supondo que você tenha um método para listar inscritos

            if (inscritos.length === 0) {
                return res.status(404).json({ error: 'Não há inscritos para enviar boletins.' });
            }
            
            await this.emailService.sendBoletimClimatico(inscritos);

            return res.status(200).json({ message: 'Boletins climáticos enviados para todos os inscritos.' });
        } catch (error) {
            console.error('Erro ao enviar boletins climáticos:', error);
            return res.status(500).json({ error: 'Erro ao enviar boletins climáticos.' });
        }
    }
}

export default EmailController;
