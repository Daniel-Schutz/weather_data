import { Model, DataTypes } from 'sequelize';
import sequelize from './conexao_banco';

class DadosClimaticosModel extends Model {
  public id!: number;
  public temperatura!: number;
  public umidade!: number;
  public velocidadeDoVento!: number;
  public latitude!: number;
  public longitude!: number;
}

DadosClimaticosModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    temperatura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    umidade: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    velocidadeDoVento: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'dados_climaticos',
    sequelize,
  }
);

export default DadosClimaticosModel;
