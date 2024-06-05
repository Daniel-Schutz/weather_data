import { Request, Response } from 'express';
import OpenWeatherMapService from '../../dominio/servicos/OpenWeatherMapService';
import RepositorioDadosClimaticos from '../../dominio/repositorios/RepositorioDadosClimaticos';
import Localizacao from '../../dominio/objetos_valor/Localizacao';

class DadosClimaticosController {
    private openWeatherMapService: OpenWeatherMapService;

    constructor() {
        const repositorioDadosClimaticos = new RepositorioDadosClimaticos();
        this.openWeatherMapService = new OpenWeatherMapService(repositorioDadosClimaticos);
    }

    public coletarDados = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { latitude, longitude } = req.body;
            if (latitude === undefined || longitude === undefined) {
                return res.status(400).json({ error: 'Latitude e Longitude são obrigatórios' });
            }
            const localizacao = new Localizacao(latitude, longitude);
            const dadosClimaticos = await this.openWeatherMapService.consultarDadosClimaticos(localizacao);
            return res.status(200).json(dadosClimaticos);
        } catch (error) {
            return res.status(500).json({ error: error  });
        }
    }

    public listarDados = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { pagina = 1, limite = 10 } = req.query;
            const paginaInt = parseInt(pagina as string, 10);
            const limiteInt = parseInt(limite as string, 10);

            const dadosClimaticos = await this.openWeatherMapService.listarDados(paginaInt, limiteInt); // Certifique-se de que essa função existe
            return res.status(200).json(dadosClimaticos);
        } catch (error) {
            return res.status(500).json({ error: error  });
        }
    }
}

export default DadosClimaticosController;
