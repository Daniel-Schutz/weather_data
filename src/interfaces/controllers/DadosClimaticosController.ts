import { Request, Response } from 'express';
import OpenWeatherMapService from '../../dominio/servicos/OpenWeatherMapService';
import RepositorioDadosClimaticos from '../../dominio/repositorios/RepositorioDadosClimaticos';
import Localizacao from '../../dominio/objetos_valor/Localizacao';

const repositorio = new RepositorioDadosClimaticos();
const service = new OpenWeatherMapService(repositorio);

class DadosClimaticosController {
    static async coletarDados(req: Request, res: Response) {
        const { latitude, longitude } = req.body;

        if (!latitude || !longitude) {
            return res.status(400).json({ erro: 'Latitude e longitude são obrigatórios.' });
        }

        const localizacao = new Localizacao(latitude, longitude);

        try {
            const dadosClimaticos = await service.consultarDadosClimaticos(localizacao);
            res.status(200).json(dadosClimaticos);
        } catch (error) {
            res.status(500).json({ erro: error });
        }
    }

    static async listarDados(req: Request, res: Response) {
        const { page = 1, limit = 10 } = req.query;

        try {
            const dados = await repositorio.listarDados(Number(page), Number(limit));
            res.status(200).json(dados);
        } catch (error) {
            res.status(500).json({ erro: error });
        }
    }
}

export default DadosClimaticosController;
