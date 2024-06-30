import axios from 'axios';
import { DATA_SERVICE_URL } from '../config';

export const coletarDados = (latitude: number, longitude: number) => {
  return axios.post(`${DATA_SERVICE_URL}/api/coletar-dados`, { latitude, longitude });
};

export const listarDadosClimaticos = (page: string, limit: string) => {
  return axios.get(`${DATA_SERVICE_URL}/api/dados-climaticos`, { params: { page, limit } });
};
