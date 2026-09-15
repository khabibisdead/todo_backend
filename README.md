# Todo Backend REST API

A simple REST API built with **Node.js, Express.js, MongoDB, and Mongoose** to perform CRUD (Create, Read, Update, Delete) operations on Todo data.

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman
* JavaScript

## 📌 Features

* Create a new Todo
* Get all Todos
* Get a Todo by ID
* Update a Todo
* Delete a Todo
* MongoDB database integration
* RESTful API endpoints

## 📂 Project Structure

```text
todo_backend/
│
├── models/
├── routes/
│   └── todo.routes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/khabibisdead/todo_backend.git
```

Go to the project directory:

```bash
cd todo_backend
```

Install dependencies:

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

## ▶️ Run the Server

Start the server with:

```bash
node server.js
```

Or, if you have a start script:

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

## 🔄 API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| POST   | `/todo`     | Create a new Todo |
| GET    | `/todo`     | Get all Todos     |
| GET    | `/todo/:id` | Get a Todo by ID  |
| PUT    | `/todo/:id` | Update a Todo     |
| DELETE | `/todo/:id` | Delete a Todo     |

## 🧪 Testing

The API was tested using **Postman**.

MongoDB data can be viewed and managed using **MongoDB Compass**.

## 📚 CRUD Operations

### Create

Use `POST` to create a new Todo.

### Read

Use `GET` to retrieve Todo data.

### Update

Use `PUT` to update an existing Todo.

### Delete

Use `DELETE` to remove a Todo.

## 🎯 Purpose

This project was created to practice building REST APIs with **Express.js and MongoDB/Mongoose** and to understand the fundamentals of backend development and CRUD operations.

## 👨‍💻 Author

**Khabib**
