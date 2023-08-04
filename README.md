# Todo App with Register and Login

This is a simple web application that allows users to register, login, and manage their todos. Each user has their own set of todos.  The data is stored in a JSON file using `json-server`.

## Features

- User Registration: Users can create an account by providing a username, email and password.
- User Login: Registered users can log in using their credentials.
- Todo Management: Authenticated users can add, view, update, and delete their todos.

## Technology Stack

- Frontend: HTML, CSS, Typescript, React JS
- Backend: `json-server`
- Database: JSON file (db.json)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the JSON server

```bash
json-server --watch db.json
```

4. Start the react server

```bash
npm start
```