# Desafio técnico Franq

Este é um desafio técnico que tem por finalidade testar minhas habilidades com programação frontend. 

O desafio consiste na criação de uma página de login e outra página restrita, esta contendo informações de cotações de ativos na bolsa de valores, utilizando a api [https://hgbrasil.com/status/finance/](https://hgbrasil.com/status/finance/)

Este projeto é um monorepositório, composto por uma aplicação frontend utilizando Vue 3, Vuetify e Apexcharts e um [servidor de submodulo utilizando Nodejs e Express](https://github.com/RafaPaludo/franq-desafio-tecnico-server/tree/master). 


## Escolha um método de instalação
- [Instalação Local com Node.js](#instalação-local-com-nodejs)
- [Instalação com Docker](#instalação-com-docker)
- [Instalação com Docker Compose](#instalação-com-docker-compose)

## Instalação Local com Node.js

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

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

----

## Instalação com Docker

Certifique-se de ter o Docker instalado em sua máquina. Você pode baixá-lo em docker.com.

1. Clone o repositório:
   ```bash
   git clone https://github.com/RafaPaludo/franq-desafio-tecnico.git
   cd franq-desafio-tecnico

2. Faça o build do servidor:
    ```bash
    cd franq-server
    docker build -t franq-server .

3. Faça o build do frontend:
    ```bash
    cd ../franq-frontend
    docker build -t franq-frontend .

4. Suba as duas imagens:
    ```bash
    docker run -d -it -p 3000:3000 franq-frontend
    docker run -d -t -p 3001:3001 franq-server

Você pode acessar a aplicação em http://localhost:3000.

----

## Instalação com Docker

Certifique-se de ter o Docker instalado em sua máquina. Você pode baixá-lo em docker.com.

1. Clone o repositório:
   ```bash
   git clone https://github.com/RafaPaludo/franq-desafio-tecnico.git
   cd franq-desafio-tecnico

2. Faça o build do servidor:
    ```bash
    cd franq-server
    docker build -t franq-server .

3. Faça o build do frontend:
    ```bash
    cd ../franq-frontend
    docker build -t franq-frontend .

4. Suba as duas imagens:
    ```bash
    docker run -d -it -p 3000:3000 franq-frontend
    docker run -d -t -p 3001:3001 franq-server

Você pode acessar a aplicação em http://localhost:3000.

----

## Instalação com Docker Compose

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Você pode baixá-los em docker.com.

1. Clone o repositório:
   ```bash
   git clone https://github.com/RafaPaludo/franq-desafio-tecnico.git
   cd franq-desafio-tecnico

2. Execute o Docker Compose:
   ```bash
   docker compose up -d 
   
Você pode acessar a aplicação em http://localhost:3000.
