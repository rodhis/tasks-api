# Task Manager API

A REST API for task management built with MVC (Model-View-Controller) architecture using TypeScript.

## Features

-   ✅ Create, list, update and delete tasks
-   🔐 JWT authentication system
-   👤 User management
-   🛡️ Data validation with Zod
-   🏗️ MVC architecture for maintainability and scalability
-   🔒 Password encryption with bcrypt

## Project Structure

```
/tasks-api
├── src/
│   ├── controllers/          # Controllers (business logic)
│   │   ├── TaskController.ts
│   │   └── UserController.ts
│   ├── models/              # Data models
│   │   ├── Task.ts
│   │   └── User.ts
│   ├── routes/              # Route definitions
│   │   ├── auth.ts
│   │   └── tasks.ts
│   ├── middlewares/         # Custom middlewares
│   │   └── errorHandler.ts
│   ├── errors/             # Custom error classes
│   │   └── HttpError.ts
│   ├── schemas/            # Validation schemas
│   │   └── validationSchemas.ts
│   └── server.ts           # Main server file
├── build/                  # Compiled files
├── package.json
├── tsconfig.json
└── readme.md
```

## API Endpoints

### Authentication

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| POST   | /register | Register new user |
| POST   | /login    | User login        |
| POST   | /logout   | User logout       |

### Tasks

| Method | Endpoint   | Description          |
| ------ | ---------- | -------------------- |
| GET    | /tasks     | List all tasks       |
| GET    | /tasks/:id | Get specific task    |
| POST   | /tasks     | Create new task      |
| PUT    | /tasks/:id | Update existing task |
| DELETE | /tasks/:id | Delete task          |

## How to Run

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/tasks-api.git
    cd tasks-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables:

    ```bash
    # Create a .env file in the project root
    PORT=3000
    JWT_SECRET=your_jwt_secret_here
    ```

4. Run in development mode:

    ```bash
    npm run dev
    ```

5. Or compile and run in production:
    ```bash
    npm run build
    npm start
    ```

## Technologies Used

### Backend & Runtime

-   **Node.js**: Server-side JavaScript runtime to execute the application
-   **TypeScript**: JavaScript superset that adds static typing, improving code quality and maintainability

### Framework & Server

-   **Express.js**: Minimalist and flexible web framework for Node.js, used to create API routes and middlewares

### Authentication & Security

-   **JWT (jsonwebtoken)**: Library for creating and verifying JWT tokens for stateless authentication
-   **bcrypt**: Library for password hashing, ensuring passwords are stored securely
-   **cookie-parser**: Middleware for parsing HTTP cookies to improve JSON usage

### Validation & Configuration

-   **Zod**: TypeScript-first schema validation library for validating input data
-   **dotenv**: Loads environment variables from a .env file to process.env

### Development

-   **tsx**: Real-time TypeScript file execution and watching during development
-   **@types/\***: TypeScript type definitions for the JavaScript libraries used

## MVC Architecture

-   **Models**: Define data structure (Task, User)
-   **Controllers**: Contain business logic (TaskController, UserController)
-   **Routes**: Define API endpoints and connect to controllers
-   **Middlewares**: Functions that process requests (authentication, error handling)
