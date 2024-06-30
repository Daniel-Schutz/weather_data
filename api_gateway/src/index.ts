import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger.json'; 
import dataRoutes from './routes/dataRoutes';
import newsletterRoutes from './routes/newsletterRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(dataRoutes);
app.use(newsletterRoutes);

app.listen(port, () => {
  console.log(`API Gateway rodando em http://localhost:${port}`);
  console.log(`Documentação disponível em http://localhost:${port}/api-docs`);
});
