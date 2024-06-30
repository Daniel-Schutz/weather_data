import { Request, Response } from 'express';
import * as newsletterService from '../services/newsletterService';

export const inscrever = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, frequencia } = req.body;
    const response = await newsletterService.inscrever(email, frequencia);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export const descadastrar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;
    const response = await newsletterService.descadastrar(email);
    res.json(response.data);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export const listarInscritos = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await newsletterService.listarInscritos();
    res.json(response.data);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export const enviarBoletimClimatico = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await newsletterService.enviarBoletimClimatico();
    res.json(response.data);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};
