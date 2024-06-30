const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/api-gateway-swagger.json'); // Caminho atualizado
const app = express();
const port = 3000;

const dataRoutes = require('./routes/dataRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(dataRoutes);
app.use(newsletterRoutes);

app.listen(port, () => {
  console.log(`API Gateway rodando em http://localhost:${port}`);
  console.log(`Documentação disponível em http://localhost:${port}/api-docs`);
});
