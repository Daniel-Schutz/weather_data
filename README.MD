# Weather Data Collector

## Alunos

Daniel Schutz e Pedro Nicoletti

## Descrição

Este projeto é um coletor de dados climáticos que utiliza a API do OpenWeatherMap para buscar dados de temperatura, umidade e velocidade do vento com base em coordenadas de latitude e longitude fornecidas. Os dados coletados são armazenados em um banco de dados e podem ser consultados posteriormente.

## Funcionalidades

- Coletar dados climáticos de uma localização específica.
- Listar dados climáticos paginados.
- Armazenar dados climáticos em um repositório.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Sequelize (para integração com o banco de dados)
- OpenWeatherMap API
- Swagger (para documentação da API)

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/Daniel-Schutz/weather_data.git
    cd weather_data
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o projeto:
    ```bash
    npm start
    ```

4. Acesse a documentação da API no Swagger:
    ```
    http://localhost:3000/api-docs
    ```

## Estrutura do Projeto

- `src/`: Diretório principal contendo o código fonte do projeto.
  - `dominio/`: Contém a lógica de domínio, incluindo serviços e repositórios.
  - `infraestrutura/`: Contém a integração com o banco de dados.
  - `interfaces/`: Contém os controladores e rotas.
  - `objetos_valor/`: Contém os objetos de valor utilizados no domínio.
  - `entidades/`: Contém as entidades do domínio.
  - `routes.ts`: Define as rotas da API.
  - `app.ts`: Arquivo principal que inicializa o servidor Express.

## Endpoints

### Coletar Dados Climáticos

- **URL**: `/dados-climaticos/coletar`
- **Método**: `POST`
- **Corpo da Requisição**:
    ```json
    {
      "latitude": "valor",
      "longitude": "valor"
    }
    ```
- **Resposta de Sucesso**:
    ```json
    {
      "temperatura": "valor",
      "umidade": "valor",
      "velocidadeDoVento": "valor",
      "localizacao": {
        "latitude": "valor",
        "longitude": "valor"
      }
    }
    ```

### Listar Dados Climáticos

- **URL**: `/dados-climaticos/listar`
- **Método**: `GET`
- **Parâmetros de Consulta**:
    - `pagina`: Número da página (opcional, padrão é 1)
    - `limite`: Número de itens por página (opcional, padrão é 10)
- **Resposta de Sucesso**:
    ```json
    [
      {
        "temperatura": "valor",
        "umidade": "valor",
        "velocidadeDoVento": "valor",
        "localizacao": {
          "latitude": "valor",
          "longitude": "valor"
        }
      },
    ]
    ```

