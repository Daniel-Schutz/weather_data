import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../../weather_data/src/infraestrutura/banco_dados/conexao_banco';

class Inscricao extends Model {
    public id!: number;
    public email!: string;
    public frequencia!: string;
}

Inscricao.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        frequencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Inscricao',
        tableName: 'Inscricoes',
    }
);

export default Inscricao;
