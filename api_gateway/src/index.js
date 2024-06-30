const express = require('express');
const app = express();
const port = 3000;

const dataRoutes = require('./routes/dataRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

app.use(express.json());
app.use(dataRoutes);
app.use(newsletterRoutes);

app.listen(port, () => {
  console.log(`API Gateway rodando em http://localhost:${port}`);
});
