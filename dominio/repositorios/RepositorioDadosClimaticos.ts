// RepositorioDadosClimaticos.ts
import DadosClimaticos from '../entidades/DadosClimaticos';
import DadosClimaticosModel from '../../infraestrutura/banco_dados/DadosClimaticosModel';
import Localizacao from '../objetos_valor/Localizacao';

class RepositorioDadosClimaticos {
  async salvarDados(dados: DadosClimaticos): Promise<boolean> {
    try {
      await DadosClimaticosModel.create({
        temperatura: dados.temperatura,
        umidade: dados.umidade,
        velocidadeDoVento: dados.velocidadeDoVento,
        latitude: dados.localizacao.latitude,
        longitude: dados.localizacao.longitude,
      });
      
      return true; // Retorna true se os dados foram salvos com sucesso
    } catch (error) {
      console.error(`Erro ao salvar os dados climáticos no banco de dados: ${error.message}`);
      return false; // Retorna false se ocorreu um erro ao salvar os dados
    }
  }

  async consultarDados(): Promise<DadosClimaticos[]> {
    try {
      const dadosSalvos = await DadosClimaticosModel.findAll();
      return dadosSalvos.map(dado => new DadosClimaticos(dado.temperatura, dado.umidade, dado.velocidadeDoVento, new Localizacao(dado.latitude, dado.longitude)));
    } catch (error) {
      throw new Error(`Erro ao consultar os dados climáticos no banco de dados: ${error.message}`);
    }
  }
}

export default RepositorioDadosClimaticos;
