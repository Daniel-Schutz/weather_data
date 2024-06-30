# Projeto API Gateway com DDD e React

Este projeto é um exemplo de API Gateway usando Domain-Driven Design (DDD) e React. Ele integra dois serviços: um serviço de dados climáticos e um serviço de newsletter.
### Alunos: Daniel Schutz e Pedro Nicoletti
## Estrutura do Projeto
```plaintext
weather_data/
├── src/
│   ├── index.js
│   ├── routes/
│   │   ├── dataRoutes.js
│   │   └── newsletterRoutes.js
├── docs/
│   └── api-gateway-swagger.json
├── package.json
└── package-lock.json
```
## Configuração do Ambiente de Desenvolvimento

### Requisitos

- Node.js
- npm ou yarn

### Instalação

1. Clone o repositório:

   git clone <URL_DO_SEU_REPOSITORIO>
   cd <NOME_DO_SEU_REPOSITORIO>

2. Instale as dependências:

   npm install

   ou

   yarn install

3. Inicie o servidor:

   node src/index.js

4. Acesse a documentação Swagger em `http://localhost:3000/api-docs`.

### Configuração da UI em React

1. Navegue até o diretório da aplicação React:

   cd path/to/your-react-app

2. Instale as dependências:

   npm install

   ou

   yarn install

3. Construa a aplicação:

   npm run build

   ou

   yarn build

4. Sirva a aplicação:

   npm install -g serve
   serve -s build

   Acesse a aplicação em `http://localhost:5000`.

## Implantação em Produção

### Opção 1: Usando um Serviço de Hospedagem

#### API Gateway no Heroku

1. Faça login no Heroku CLI:

   heroku login

2. Crie um novo aplicativo Heroku:

   heroku create

3. Faça push do projeto para Heroku:

   git push heroku main

