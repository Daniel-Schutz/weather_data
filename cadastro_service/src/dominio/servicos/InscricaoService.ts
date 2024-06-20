import Inscricao from '../../../../cadastro_service/src/dominio/entidades/Inscricao'
import InscricaoModel from '../../infraestrutura/banco_dados/InscricaoModel';

class InscricaoService {
  public async cadastrar(email: string, frequencia: string): Promise<Inscricao> {
    try {
      const inscricaoExistente = await InscricaoModel.findOne({ where: { email } });
      if (inscricaoExistente) {
        throw new Error('Email já inscrito');
      }

      const inscricao = await InscricaoModel.create({ email, frequencia });
      return new Inscricao(inscricao.email, inscricao.frequencia);
    } catch (error) {
      throw new Error(`Erro ao inscrever usuário: ${error}`);
    }
  }

  public async descadastrar(email: string): Promise<void> {
    try {
      const contaDeletada = await InscricaoModel.destroy({ where: { email } });
      if (contaDeletada === 0) {
        throw new Error('Email não encontrado');
      }
    } catch (error) {
      throw new Error(`Erro ao cancelar inscrição: ${error}`);
    }
  }

  public async listarCadastados(): Promise<Inscricao[]> {
    try {
      const inscritos = await InscricaoModel.findAll();
      return inscritos.map(inscrito => new Inscricao(inscrito.email, inscrito.frequencia));
    } catch (error) {
      throw new Error(`Erro ao listar inscritos: ${error}`);
    }
  }
}

export default InscricaoService;
