import { Model, DataTypes } from 'sequelize';
import sequelize from '../banco_dados/conexao_banco';

class BoletimEnviado extends Model {
    public id!: number;
    public email!: string;
    public dataEnvio!: Date;
}

BoletimEnviado.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dataEnvio: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'BoletimEnviado',
        tableName: 'BoletinsEnviados',
    }
);

export default BoletimEnviado;
