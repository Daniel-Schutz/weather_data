const dataService = require('../services/dataService');

const coletarDados = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const response = await dataService.coletarDados(latitude, longitude);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const listarDadosClimaticos = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const response = await dataService.listarDadosClimaticos(page, limit);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  coletarDados,
  listarDadosClimaticos
};
