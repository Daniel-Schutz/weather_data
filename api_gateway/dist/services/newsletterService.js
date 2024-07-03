"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarBoletimClimatico = exports.listarInscritos = exports.descadastrar = exports.inscrever = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
const inscrever = (email, frequencia) => {
    return axios_1.default.post(`${config_1.NEWSLETTER_SERVICE_URL}/api/inscricao`, { email, frequencia });
};
exports.inscrever = inscrever;
const descadastrar = (email) => {
    return axios_1.default.post(`${config_1.NEWSLETTER_SERVICE_URL}/api/descadastrar`, { email });
};
exports.descadastrar = descadastrar;
const listarInscritos = () => {
    return axios_1.default.get(`${config_1.NEWSLETTER_SERVICE_URL}/api/inscritos`);
};
exports.listarInscritos = listarInscritos;
const enviarBoletimClimatico = () => {
    return axios_1.default.post(`${config_1.NEWSLETTER_SERVICE_URL}/api/enviar-boletim-climatico`);
};
exports.enviarBoletimClimatico = enviarBoletimClimatico;
