import { Model, DataTypes } from 'sequelize';
import sequelize from '../banco_dados/conexao_banco';

class Subscription extends Model {
    public id!: number;
    public email!: string;
    public frequency!: string;
}

Subscription.init(
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
        frequency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Subscription',
        tableName: 'subscriptions',
    }
);

export default Subscription;
