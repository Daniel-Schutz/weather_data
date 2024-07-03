"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarDadosClimaticos = exports.coletarDados = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
const coletarDados = (latitude, longitude) => {
    return axios_1.default.post(`${config_1.DATA_SERVICE_URL}/api/coletar-dados`, { latitude, longitude });
};
exports.coletarDados = coletarDados;
const listarDadosClimaticos = (page, limit) => {
    return axios_1.default.get(`${config_1.DATA_SERVICE_URL}/api/dados-climaticos`, { params: { page, limit } });
};
exports.listarDadosClimaticos = listarDadosClimaticos;
