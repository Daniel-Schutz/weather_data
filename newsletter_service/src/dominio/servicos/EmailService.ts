import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import  Inscricao  from '../entidades/Inscricao'; 

dotenv.config();

class EmailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, 
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
        });
    }

    public async sendBoletimClimatico(inscritos: Inscricao[]) {
        try {
            for (const inscricao of inscritos) {
                const { email, frequencia } = inscricao;

             
                if (this.shouldSendEmail(frequencia)) {
                    await this.sendEmail(email, 'Boletim Climático', 'Aqui está o seu boletim climático semanal/mensal/semestral.');
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
            console.log(`Email sent to ${to}`);
        } catch (error) {
            console.error(`Error sending email to ${to}:`, error);
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
