# Desafio técnico Franq

Este é um desafio técnico que tem por finalidade testar minhas habilidades com programação frontend. 

O desafio consiste na criação de uma página de login e outra página restrita, esta contendo informações de cotações de ativos na bolsa de valores, utilizando a api [https://hgbrasil.com/status/finance/](https://hgbrasil.com/status/finance/)

Este projeto é um monorepositório, composto por uma aplicação frontend utilizando Vue 3, Vuetify e Apexcharts e um [servidor de submodulo utilizando Nodejs e Express](https://github.com/RafaPaludo/franq-desafio-tecnico-server/tree/master). 


## Escolha um método de instalação
- [Instalação Local com Node.js](#instalação-local-com-nodejs)
- [Instalação com Docker](#instalação-com-docker)
- [Instalação com Docker Compose](#instalação-com-docker-compose)

## Instalação Local com Node.js

1. Clone o repositório:
   ```bash
   git clone https://github.com/RafaPaludo/franq-desafio-tecnico.git
   cd franq-desafio-tecnico

2. Instale as dependências:
    ```bash
     npm --prefix /franq-frontend install
     npm --prefix /franq-server install

3. Inicie o servidor e o fronted - execute cada comando em uma instância de terminal separada:
     ```bash
     npm --prefix /franq-server start

4. Abra uma nova instância de terminal e inicie o frontend:
    ```bash
    npm --prefix /franq-frontend run dev

Você pode acessar a aplicação em http://localhost:3000.

   









## Configuração

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

1. Clone o repositório:

   ```bash
   git clone https://github.com/RafaPaludo/franq-desafio-tecnico-server.git
   cd franq-desafio-tecnico-server

2. Instale as dependências:
   ```bash
   npm install

3. Para iniciar o servidor proxy, execute o seguinte comando:
   ```bash
   npm start

Isso iniciará o servidor na porta padrão 3001. Você pode acessar o servidor proxy em http://localhost:3001/api/finance para listar as cotações da api.

### Rodando com Docker

Se preferir, você também pode executar o projeto usando Docker. Certifique-se de ter o Docker instalado em sua máquina. Você pode baixá-lo em [docker.com](https://www.docker.com/).

1. Clone o repositório:

   ```bash
   git clone https://github.com/RafaPaludo/franq-desafio-tecnico-server.git
   cd franq-desafio-tecnico-server

2. Construa a imagem do Docker:
    ```bash
    docker build -t franq-desafio-tecnico-server .

3. Execute o contêiner Docker:
     ```bash
     docker run -p 3001:3001 franq-desafio-tecnico-server

Isso iniciará o servidor na porta padrão 3001. Você pode acessar o servidor proxy em http://localhost:3001/api/finance para listar as cotações da api.


   
