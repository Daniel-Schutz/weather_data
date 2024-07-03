import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import  Inscricao  from '../../../../newsletter_service/src/dominio/entidades/Inscricao';
import OpenWeatherMapService from '../../../../weather_service/src/dominio/servicos/OpenWeatherMapService';
import Localizacao from '../../../../weather_service/src/dominio/objetos_valor/Localizacao';
import RepositorioDadosClimaticos from '../../../../weather_service/src/dominio/repositorios/RepositorioDadosClimaticos'; 
import DadosClimaticos from '../../../../weather_service/src/dominio/entidades/DadosClimaticos'; 

dotenv.config();

class EmailService {
    private transporter;
    private weatherService: OpenWeatherMapService;

    constructor(repositorioDadosClimaticos: RepositorioDadosClimaticos) {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        this.weatherService = new OpenWeatherMapService(repositorioDadosClimaticos);
    }

    public async sendBoletimClimatico(inscritos: Inscricao[]) {
        try {
            for (const inscricao of inscritos) {
                const { email, frequencia } = inscricao;

                if (this.shouldSendEmail(frequencia)) {
                    const localizacao = new Localizacao(-23.5505, -46.6333);
                    const weatherData = await this.weatherService.consultarDadosClimaticos(localizacao);
                    const weatherInfo = `Temperatura: ${weatherData.temperatura}°C, Umidade: ${weatherData.umidade}%, Velocidade do Vento: ${weatherData.velocidadeDoVento} m/s`;
                    await this.sendEmail(email, 'Boletim Climático', `Aqui está o seu boletim climático:\n\n${weatherInfo}`);
             
                }
            }
            console.log('Boletins climáticos enviados para todos os inscritos.');
        } catch (error) {
            console.error('Erro ao enviar boletins climáticos:', error);
            throw new Error('Erro ao enviar boletins climáticos.');
        }
    }

    private async sendEmail(to: string, subject: string, text: string) {
        try {
            await this.transporter.sendMail({
                from: '"Weather Service" <your-email@gmail.com>',
                to,
                subject,
                text,
            });
            console.log(`Email enviado para ${to}`);
        } catch (error) {
            console.error(`Erro ao enviar email para ${to}:`, error);
            throw new Error('Erro ao enviar email.');
        }
    }

    private shouldSendEmail(frequencia: string): boolean {
        const now = new Date();
        const dayOfWeek = now.getDay();
        const dayOfMonth = now.getDate(); 

        switch (frequencia) {
            case 'semanalmente':
                return dayOfWeek === 0; 
            case 'mensalmente':
                return dayOfMonth === 1;
            case 'semestralmente':
                return dayOfMonth === 1 && (now.getMonth() === 0 || now.getMonth() === 6); 
            default:
                return false;
        }
    }
}

export default EmailService;
