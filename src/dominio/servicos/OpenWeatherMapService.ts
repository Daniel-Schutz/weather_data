// OpenWeatherMapService.ts
import DadosClimaticos from '../entidades/DadosClimaticos';
import Localizacao from '../objetos_valor/Localizacao';
import RepositorioDadosClimaticos from '../repositorios/RepositorioDadosClimaticos';

class OpenWeatherMapService {
    private repositorioDadosClimaticos: RepositorioDadosClimaticos;

    constructor(repositorioDadosClimaticos: RepositorioDadosClimaticos) {
        this.repositorioDadosClimaticos = repositorioDadosClimaticos;
    }

    async consultarDadosClimaticos(localizacao: Localizacao): Promise<DadosClimaticos> {
        const apiKey = 'b3cb03a5285266f91c8641fef27ef3e6';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${localizacao.latitude}&lon=${localizacao.longitude}&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro ao consultar a API do OpenWeatherMap');
            }

            const data = await response.json();
            const temperatura = data.main.temp;
            const umidade = data.main.humidity;
            const velocidadeDoVento = data.wind.speed;

            const dadosClimaticos = new DadosClimaticos(temperatura, umidade, velocidadeDoVento, localizacao);

            // Salvar os dados climáticos no repositório
            const sucesso = await this.repositorioDadosClimaticos.salvarDados(dadosClimaticos);

            if (!sucesso) {
                throw new Error('Erro ao salvar os dados climáticos no repositório');
            }

            return dadosClimaticos;
        } catch (error) {
            throw new Error(`Erro ao consultar a API do OpenWeatherMap: ${error}`);
        }
    }
}

export default OpenWeatherMapService;
