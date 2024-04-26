## API_REST

## Descrição
Desenvolvi um projeto em JavaScript para uma aplicação web, com ênfase no desenvolvimento do back-end. Criei uma API que se integra a um sistema de usuários e gerencia a criação de perfis de alunos para uma escola. A ferramenta do Express com base do projeto. Utilizamos o Sequelize para interagir de forma eficiente com as tabelas do banco de dados, garantindo uma manipulação precisa dos dados. Além disso, adotamos o ESLint para manter um padrão de código consistente e de alta qualidade em todo o projeto.


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
    **DATABASE='escola'
DATABASE_HOST='127.0.0.1'
DATABASE_PORT=3306
DATABASE_USERNAME='root'
DATABASE_PASSWORD='root'

TOKEN_SECRET='Qualquer_um'
TOKEN_EXPIRATION=7d

APP_PORT=3001
APP_URL=http://localhost:3001
**
   ```
