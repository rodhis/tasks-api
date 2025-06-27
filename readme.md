# Tasks Manager API

A simple Tasks Manager API built with MVC (Model-View-Controller) architecture.

## Features

- Create, read, update, and delete tasks
- RESTful API endpoints
- MVC project structure for maintainability and scalability

## Project Structure

```
/tasks-api
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── taskRoutes.js
├── app.js
└── readme.md
```

## Endpoints

| Method | Endpoint        | Description           |
|--------|----------------|----------------------|
| GET    | /tasks         | List all tasks       |
| GET    | /tasks/:id     | Get a single task    |
| POST   | /tasks         | Create a new task    |
| PUT    | /tasks/:id     | Update a task        |
| DELETE | /tasks/:id     | Delete a task        |

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/tasks-api.git
    cd tasks-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

## Technologies Used

- Node.js
- Express.js
- (Optional) MongoDB / Mongoose

## License

MIT
