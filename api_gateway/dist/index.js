"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../docs/swagger.json"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const newsletterRoutes_1 = __importDefault(require("./routes/newsletterRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(dataRoutes_1.default);
app.use(newsletterRoutes_1.default);
app.listen(port, () => {
    console.log(`API Gateway rodando em http://localhost:${port}`);
    console.log(`Documentação disponível em http://localhost:${port}/api-docs`);
});
