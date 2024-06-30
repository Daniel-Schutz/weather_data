const newsletterService = require('../services/newsletterService');

const inscrever = async (req, res) => {
  try {
    const { email, frequencia } = req.body;
    const response = await newsletterService.inscrever(email, frequencia);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const descadastrar = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await newsletterService.descadastrar(email);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const listarInscritos = async (req, res) => {
  try {
    const response = await newsletterService.listarInscritos();
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const enviarBoletimClimatico = async (req, res) => {
  try {
    const response = await newsletterService.enviarBoletimClimatico();
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  inscrever,
  descadastrar,
  listarInscritos,
  enviarBoletimClimatico
};
