import DadosClimaticos from '../entidades/DadosClimaticos';
import Localizacao from '../objetos_valor/Localizacao';
import RepositorioDadosClimaticos from '../repositorios/RepositorioDadosClimaticos';
import OpenWeatherMapResponse from '../objetos_valor/OpenWeatherMapResponse';

class OpenWeatherMapService {
    private repositorioDadosClimaticos: RepositorioDadosClimaticos;

    constructor(repositorioDadosClimaticos: RepositorioDadosClimaticos) {
        this.repositorioDadosClimaticos = repositorioDadosClimaticos;
    }

    async consultarDadosClimaticos(localizacao: Localizacao): Promise<DadosClimaticos> {
        const apiKey = 'b3cb03a5285266f91c8641fef27ef3e6';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${localizacao.latitude}&lon=${localizacao.longitude}&appid=${apiKey}`;

        try {
            const fetch = (await import('node-fetch')).default;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro ao consultar a API do OpenWeatherMap');
            }

            const data = await response.json();

            if (this.isOpenWeatherMapResponse(data)) {
                const temperatura = data.main.temp;
                const umidade = data.main.humidity;
                const velocidadeDoVento = data.wind.speed;

                const dadosClimaticos = new DadosClimaticos(temperatura, umidade, velocidadeDoVento, localizacao);

                const sucesso = await this.repositorioDadosClimaticos.salvarDados(dadosClimaticos);

                if (!sucesso) {
                    throw new Error('Erro ao salvar os dados climáticos no repositório');
                }

                return dadosClimaticos;
            } else {
                throw new Error('Resposta da API em formato inesperado');
            }
        } catch (error) {
            throw new Error(`Erro ao consultar a API do OpenWeatherMap: ${error}`);
        }
    }

    private isOpenWeatherMapResponse(data: any): data is OpenWeatherMapResponse {
        return data && data.main && data.main.temp !== undefined && data.main.humidity !== undefined && data.wind && data.wind.speed !== undefined;
    }

    async listarDados(page: number, limit: number): Promise<DadosClimaticos[]> {
        return this.repositorioDadosClimaticos.listarDados(page, limit);
    }
}

export default OpenWeatherMapService;
