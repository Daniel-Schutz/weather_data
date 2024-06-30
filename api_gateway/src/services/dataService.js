const axios = require('axios');
const { DATA_SERVICE_URL } = require('../config');

const coletarDados = (latitude, longitude) => {
  return axios.post(`${DATA_SERVICE_URL}/api/coletar-dados`, { latitude, longitude });
};

const listarDadosClimaticos = (page, limit) => {
  return axios.get(`${DATA_SERVICE_URL}/api/dados-climaticos`, { params: { page, limit } });
};

module.exports = {
  coletarDados,
  listarDadosClimaticos
};
