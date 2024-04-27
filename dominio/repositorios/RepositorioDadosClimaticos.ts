import DadosClimaticos from '../entidades/DadosClimaticos';
import DadosClimaticosModel from '../../infraestrutura/banco_dados/DadosClimaticosModel';
import Localizacao from '../objetos_valor/Localizacao';

class RepositorioDadosClimaticos {
  async salvarDados(dados: DadosClimaticos): Promise<void> {
    try {
      await DadosClimaticosModel.create({
        temperatura: dados.temperatura,
        umidade: dados.umidade,
        velocidadeDoVento: dados.velocidadeDoVento,
        latitude: dados.localizacao.latitude,
        longitude: dados.localizacao.longitude,
      });
    } catch (error) {
      throw new Error(`Erro ao salvar os dados climáticos no banco de dados: ${error.message}`);
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
