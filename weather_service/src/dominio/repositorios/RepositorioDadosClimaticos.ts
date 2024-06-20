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
      console.error(`Erro ao salvar os dados climáticos no banco de dados: ${error}`);
      return false; // Retorna false se ocorreu um erro ao salvar os dados
    }
  }

  async listarDados(page: number = 1, limit: number = 10): Promise<DadosClimaticos[]> {
    try {
      const offset = (page - 1) * limit;
      const dadosSalvos = await DadosClimaticosModel.findAll({ offset, limit });
      return dadosSalvos.map(dado => new DadosClimaticos(
        dado.temperatura, 
        dado.umidade, 
        dado.velocidadeDoVento, 
        new Localizacao(dado.latitude, dado.longitude)
      ));
    } catch (error) {
      throw new Error(`Erro ao consultar os dados climáticos no banco de dados: ${error}`);
    }
  }
}

export default RepositorioDadosClimaticos;
