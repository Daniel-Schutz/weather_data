import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('openWeather', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
});

// Testar a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincronizar o modelo com o banco de dados
    sequelize.sync({ alter: true })
      .then(() => {
        console.log('A tabela foi criada ou atualizada com sucesso.');
      })
      .catch((error) => {
        console.error('Erro ao criar ou atualizar a tabela:', error);
      });
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  });

export default sequelize;