import axios from 'axios';
import { NEWSLETTER_SERVICE_URL } from '../config';

export const inscrever = (email: string, frequencia: string) => {
  return axios.post(`${NEWSLETTER_SERVICE_URL}/api/inscricao`, { email, frequencia });
};

export const descadastrar = (email: string) => {
  return axios.post(`${NEWSLETTER_SERVICE_URL}/api/descadastrar`, { email });
};

export const listarInscritos = () => {
  return axios.get(`${NEWSLETTER_SERVICE_URL}/api/inscritos`);
};

export const enviarBoletimClimatico = () => {
  return axios.post(`${NEWSLETTER_SERVICE_URL}/api/enviar-boletim-climatico`);
};
