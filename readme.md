# API Gerenciador de Tarefas

Uma API REST para gerenciamento de tarefas construída com arquitetura MVC (Model-View-Controller) usando TypeScript.

## Funcionalidades

- ✅ Criar, listar, atualizar e deletar tarefas
- 🔐 Sistema de autenticação com JWT
- 👤 Gerenciamento de usuários
- 🛡️ Validação de dados com Zod
- 🏗️ Arquitetura MVC para manutenibilidade e escalabilidade
- 🔒 Criptografia de senhas com bcrypt

## Estrutura do Projeto

```
/tasks-api
├── src/
│   ├── controllers/          # Controladores (lógica de negócio)
│   │   ├── TaskController.ts
│   │   └── UserController.ts
│   ├── models/              # Modelos de dados
│   │   ├── Task.ts
│   │   └── User.ts
│   ├── routes/              # Definição das rotas
│   │   ├── auth.ts
│   │   └── tasks.ts
│   ├── middlewares/         # Middlewares personalizados
│   │   └── errorHandler.ts
│   ├── errors/             # Classes de erro customizadas
│   │   └── HttpError.ts
│   ├── schemas/            # Esquemas de validação
│   │   └── validationSchemas.ts
│   └── server.ts           # Arquivo principal do servidor
├── build/                  # Arquivos compilados
├── package.json
├── tsconfig.json
└── readme.md
```

## Endpoints da API

### Autenticação
| Método | Endpoint        | Descrição                    |
|--------|----------------|------------------------------|
| POST   | /register      | Registrar novo usuário       |
| POST   | /login         | Fazer login                  |
| POST   | /logout        | Fazer logout                 |

### Tarefas
| Método | Endpoint        | Descrição                    |
|--------|----------------|------------------------------|
| GET    | /tasks         | Listar todas as tarefas      |
| GET    | /tasks/:id     | Obter uma tarefa específica  |
| POST   | /tasks         | Criar nova tarefa            |
| PUT    | /tasks/:id     | Atualizar tarefa existente   |
| DELETE | /tasks/:id     | Deletar tarefa               |

## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/yourusername/tasks-api.git
    cd tasks-api
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:
    ```bash
    # Crie um arquivo .env na raiz do projeto
    PORT=3000
    JWT_SECRET=seu_jwt_secret_aqui
    ```

4. Execute em modo de desenvolvimento:
    ```bash
    npm run dev
    ```

5. Ou compile e execute em produção:
    ```bash
    npm run build
    npm start
    ```

## Tecnologias Utilizadas

### Backend & Runtime
- **Node.js**: Runtime JavaScript server-side para executar a aplicação
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade e manutenibilidade do código

### Framework & Servidor
- **Express.js**: Framework web minimalista e flexível para Node.js, usado para criar as rotas e middlewares da API

### Autenticação & Segurança
- **JWT (jsonwebtoken)**: Biblioteca para criação e verificação de tokens JWT para autenticação stateless
- **bcrypt**: Biblioteca para hash de senhas, garantindo que as senhas sejam armazenadas de forma segura
- **cookie-parser**: Middleware para parsing de cookies HTTP de modo a melhorar o uso com JSON

### Validação & Configuração
- **Zod**: Biblioteca de validação de esquemas TypeScript-first para validar dados de entrada
- **dotenv**: Carrega variáveis de ambiente de um arquivo .env para process.env

### Desenvolvimento
- **tsx**: Execução e watch de arquivos TypeScript em tempo real durante o desenvolvimento
- **@types/***: Definições de tipos TypeScript para as bibliotecas JavaScript utilizadas

### Renderização (se aplicável)
- **EJS**: Engine de template para renderização de views HTML (caso seja necessário)

## Arquitetura MVC

- **Models**: Definem a estrutura dos dados (Task, User)
- **Controllers**: Contêm a lógica de negócio (TaskController, UserController)
- **Routes**: Definem os endpoints da API e conectam às controllers
- **Middlewares**: Funções que processam requisições (autenticação, tratamento de erros)

