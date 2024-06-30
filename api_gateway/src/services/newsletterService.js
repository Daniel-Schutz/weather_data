const axios = require('axios');
const { NEWSLETTER_SERVICE_URL } = require('../config');

const inscrever = (email, frequencia) => {
  return axios.post(`${NEWSLETTER_SERVICE_URL}/api/inscricao`, { email, frequencia });
};

const descadastrar = (email) => {
  return axios.post(`${NEWSLETTER_SERVICE_URL}/api/descadastrar`, { email });
};

const listarInscritos = () => {
  return axios.get(`${NEWSLETTER_SERVICE_URL}/api/inscritos`);
};

const enviarBoletimClimatico = () => {
  return axios.post(`${NEWSLETTER_SERVICE_URL}/api/enviar-boletim-climatico`);
};

module.exports = {
  inscrever,
  descadastrar,
  listarInscritos,
  enviarBoletimClimatico
};
