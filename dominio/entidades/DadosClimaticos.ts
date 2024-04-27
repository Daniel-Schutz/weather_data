import Localizacao from '../objetos_valor/Localizacao';

class DadosClimaticos {
    temperatura: number;
    umidade: number;
    velocidadeDoVento: number;
    localizacao: Localizacao;

    constructor(temperatura: number, umidade: number, velocidadeDoVento: number, localizacao: Localizacao) {
        this.temperatura = temperatura;
        this.umidade = umidade;
        this.velocidadeDoVento = velocidadeDoVento;
        this.localizacao = localizacao;
    }
}

export default DadosClimaticos;
