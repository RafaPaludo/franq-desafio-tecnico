# Cnsiderações sobre o projeto

Optei por desenvolver o projeto utilizando Vue 3 e Vuetify, pois entendi como relacionado com o dia a dia da empresa.

Também achei interessante a biblioteca [Apexcharts.js](https://apexcharts.com/) para a construção dos gráficos. Foi a primeira vez que utilizei, mas creio que foi condizente com o proposto.

Optei por não criar um banco de dados pois a quantidade de informações a serem salvas não eram grandes, por isso salvei os dados dos usuários em arqruivos .json.

## Problemas no desenvolvimento

Inicialmente não consegui conectar a api https://hgbrasil.com/status/finance/ diretamente pelo browser, indicando erro de CORS e bloqueando a chamada do script. 
Por isso precisei criar um servidor de proxy para fazer a chamada a api e então retornar o conteúdo.
Como precisei criar o servidor, achei interessante já criar as rotas de login e registro nesse mesmo servidor.

Como não havia um layout esperado, tentei utilizar ao máximo os estilos dos componente do Vuetify e priorizei a criação das funcionalidades principais, principalmente o login e a apresentação das cotações.
Infelizmente não consegui finalizar a tempo a entrega da atualização do gráfico em tempo real. 

Outro ponto que tive dificuldade foi a implementação dos containers docker na aplicação.

## Melhorias

A autenticação entre cliente e servidor não está seguindo padrões de segurança. Idealmente precisaria utilizar autenticador em dois fatores e criptografar os dados dos usuários.

Criação de um banco de dados.

Integrar melhor os dados exibidos nos gráficos com as informações obtidas da api.

Utilziar secrets para configuração de portas e endpoints.
