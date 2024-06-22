import cron from 'node-cron';
import EmailService from './EmailService';
import InscricaoService from './InscricaoService';

class SchedulerService {
    private inscricaoService: InscricaoService;
    private emailService: EmailService;

    constructor() {
        this.inscricaoService = new InscricaoService();
        this.emailService = new EmailService();
    }

    public start() {
        cron.schedule('0 9 * * 0', async () => { 
            await this.sendBoletinsSemanais();
        });

        cron.schedule('0 9 1 * *', async () => { 
            await this.sendBoletinsMensais();
        });

        cron.schedule('0 9 1 1,7 *', async () => {
            await this.sendBoletinsSemestrais();
        });

        console.log('Tarefas agendadas para enviar boletins climáticos.');
    }

    private async sendBoletinsSemanais() {
        const inscritos = await this.inscricaoService.listarCadastados();
        const inscritosSemanais = inscritos.filter(inscricao => inscricao.frequencia === 'semanalmente');
        await this.emailService.sendBoletimClimatico(inscritosSemanais);
    }

    private async sendBoletinsMensais() {
        const inscritos = await this.inscricaoService.listarCadastados();
        const inscritosMensais = inscritos.filter(inscricao => inscricao.frequencia === 'mensalmente');
        await this.emailService.sendBoletimClimatico(inscritosMensais);
    }

    private async sendBoletinsSemestrais() {
        const inscritos = await this.inscricaoService.listarCadastados();
        const inscritosSemestrais = inscritos.filter(inscricao => inscricao.frequencia === 'semestralmente');
        await this.emailService.sendBoletimClimatico(inscritosSemestrais);
    }
}

export default SchedulerService;
