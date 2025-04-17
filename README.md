# PostgreSQL Node.js API

A RESTful API built with Node.js, Express, and PostgreSQL for user management. This application uses Docker for containerization and environment management.

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![Express](https://img.shields.io/badge/Express-v4.x-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v14.x-blue)
![Docker](https://img.shields.io/badge/Docker-latest-blue)

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Docker Setup](#docker-setup)
  - [Manual Setup](#manual-setup)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Input Validation](#input-validation)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **CRUD Operations**: Create, read, update, and delete user records
- **Input Validation**: Request data validation using Joi
- **Error Handling**: Centralized error handling middleware
- **PostgreSQL Database**: Reliable relational database
- **Docker Integration**: Easy deployment with Docker containers
- **Environment Configuration**: Using dotenv for environment variables

## 📁 Project Structure

```
project-root/
├── config/
│   └── db.js               # Database connection configuration
├── controllers/
│   └── userController.js   # Request handlers for user routes
├── data/
│   └── createUserTable.js  # Database table initialization
├── middlewares/
│   ├── errorhandler.js     # Error handling middleware
│   └── inputValidator.js   # Request validation middleware
├── models/
│   └── userModel.js        # Database service methods
├── routes/
│   └── userRoutes.js       # API route definitions
├── .env                    # Environment variables (not tracked by git)
├── .gitignore              # Git ignore file
├── server.js              # Application entry point
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # Project documentation
```

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## 🚀 Getting Started

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
DB_USER=postgres
DB_HOST=postgres
DB_NAME=users_db
DB_PASSWORD=your_secure_password
DB_PORT=5432
```

### Docker Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/postgres-node-api.git
cd postgres-node-api
```

2. **Create and start containers**

```bash
docker-compose up -d
```

This will:
- Create and start the PostgreSQL container
- Create and start the Node.js application container
- Set up the network between them
- Initialize the database with the users table

3. **Access the API**

The API will be available at http://localhost:5001

### Manual Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/postgres-node-api.git
cd postgres-node-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up PostgreSQL**

Ensure PostgreSQL is installed and running. Create a database and update the `.env` file with your connection details.

4. **Start the application**

```bash
npm start
```

## 📌 API Endpoints

| Method | Endpoint     | Description           | Request Body            | Response                     |
|--------|--------------|----------------------|------------------------|------------------------------|
| POST   | /api/user    | Create a new user    | `{ "name": "", "email": "" }` | User object                  |
| GET    | /api/user    | Get all users        | None                   | Array of user objects        |
| GET    | /api/user/:id | Get user by ID       | None                   | User object                  |
| PUT    | /api/user/:id | Update a user        | `{ "name": "", "email": "" }` | Updated user object          |
| DELETE | /api/user/:id | Delete a user        | None                   | Deleted user object          |

### Example Request (Create User)

```bash
curl -X POST http://localhost:5001/api/user \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

### Example Response

```json
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2025-04-17T08:30:00.000Z"
  }
}
```

## ⚠️ Error Handling

The API uses a centralized error handling middleware that returns consistent error responses:

```json
{
  "status": 500,
  "message": "Something went wrong",
  "error": "Error message details"
}
```

Common HTTP status codes:
- `200`: Success
- `201`: Resource created
- `400`: Bad request (validation error)
- `404`: Resource not found
- `500`: Server error

## ✅ Input Validation

Request validation is handled by Joi. User inputs are validated against the following schema:

```javascript
const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
})
```

## 💾 Database Schema

**Users Table**

```sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
