## API_REST

## Descrição
Desenvolvi um projeto em JavaScript para uma aplicação web, com foco no desenvolvimento do back-end. Implementei uma API que se integra a um sistema de usuários e gerencia a criação de perfis de alunos para uma escola, utilizando o Express como base do projeto. Para interagir de forma eficiente com as tabelas do banco de dados, empregamos o Sequelize, assegurando uma manipulação precisa dos dados. Além disso, adotamos o ESLint para garantir um padrão de código consistente e de alta qualidade em todo o projeto.


## Funcionalidades
- Login (ultilizando o JWT)
- Criação de Alunos
- Mudar o email do aluno


## Instalação
Passos para instalar e configurar o projeto localmente:

## 1. Instale as dependências:
   ```sh
    npm i sequelize
    npm i express
    npx sequelize db:migrate
    npm run dev
   ```
## 2. Configure as variáveis de ambiente no arquivo `.env`:
   ```sh
DATABASE='escola'
DATABASE_HOST='127.0.0.1'
DATABASE_PORT=3306
DATABASE_USERNAME='root'
DATABASE_PASSWORD='root'

TOKEN_SECRET='Qualquer_um'
TOKEN_EXPIRATION=7d

APP_PORT=3001
APP_URL=http://localhost:3001

   ```
Configurações SQLite abaixo:
```sh
  module.exports = {
  
  dialect: 'sqlite',
  storage: './db.sqlite',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

   ```
