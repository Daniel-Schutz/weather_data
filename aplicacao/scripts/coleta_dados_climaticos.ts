// Importações dos módulos
import Localizacao from '../../dominio/objetos_valor/Localizacao';
import OpenWeatherMapService from '../../dominio/servicos/OpenWeatherMapService';
import RepositorioDadosClimaticos from '../../dominio/repositorios/RepositorioDadosClimaticos';
import DadosClimaticos from '../../dominio/entidades/DadosClimaticos';

// Configurações
const localizacao: Localizacao = new Localizacao(-20.4435, -54.6478); // Exemplo de localização em Mato Grosso do Sul

// Instanciar o repositório de dados climáticos
const repositorioDadosClimaticos = new RepositorioDadosClimaticos();

// Instanciar o serviço OpenWeatherMapService, passando o repositório como argumento
const openWeatherMapService = new OpenWeatherMapService(repositorioDadosClimaticos);

// Coleta de Dados Climáticos
async function coletarDadosClimaticos(): Promise<void> {
    try {
        // Consultar dados climáticos
        const dadosClimaticos: DadosClimaticos = await openWeatherMapService.consultarDadosClimaticos(localizacao);

        console.log('Dados climáticos coletados com sucesso:', dadosClimaticos);
    } catch (error) {
        console.error('Erro ao coletar os dados climáticos:', error);
    }
}

// Executar a coleta de dados climáticos
coletarDadosClimaticos();
