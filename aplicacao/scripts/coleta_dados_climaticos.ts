import Localizacao from '../../dominio/objetos_valor/Localizacao';
import OpenWeatherMapService from '../../dominio/servicos/OpenWeatherMapService';
import RepositorioDadosClimaticos from '../../dominio/repositorios/RepositorioDadosClimaticos';
import DadosClimaticos from '../../dominio/entidades/DadosClimaticos';

// Configurações
const localizacao: Localizacao = new Localizacao(-20.4435, -54.6478); // Exemplo de localização em Mato Grosso do Sul

// Serviços
const openWeatherMapService = new OpenWeatherMapService();
const repositorioDadosClimaticos = new RepositorioDadosClimaticos();

// Coleta de Dados Climáticos
async function coletarDadosClimaticos(): Promise<void> {
    try {
        // Consultar dados climáticos
        const dadosClimaticos: DadosClimaticos = await openWeatherMapService.consultarDadosClimaticos(localizacao);


        // Salvar dados climáticos
        await repositorioDadosClimaticos.salvarDados(dadosClimaticos);

        console.log('Dados climáticos coletados e armazenados com sucesso!');
    } catch (error) {
        console.error('Erro ao coletar e armazenar os dados climáticos:', error);
    }
}

// Executar a coleta de dados climáticos
coletarDadosClimaticos();
