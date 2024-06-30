import { Request, Response } from 'express';
import * as dataService from '../services/dataService';

export const coletarDados = async (req: Request, res: Response): Promise<void> => {
  try {
    const { latitude, longitude } = req.body;
    const response = await dataService.coletarDados(latitude, longitude);
    res.json(response.data);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export const listarDadosClimaticos = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page, limit } = req.query;
    const response = await dataService.listarDadosClimaticos(page as string, limit as string);
    res.json(response.data);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};
