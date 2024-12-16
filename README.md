# Book Library API - Take-Home Assignment #3

## 📝 Overview

Create a RESTful API for managing a book library system. This project demonstrates understanding of REST principles, Node.js best practices, and modern API design patterns.

## 🛠️ Technical Requirements

### Tech Stack

- **Backend:** Node.js with Express.js
- **Language:** Javascript
- **Database:** In-memory

### Core Features

#### API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/books`     | Retrieve all books      |
| GET    | `/api/books/:id` | Get a specific book     |
| POST   | `/api/books`     | Create a new book       |
| PUT    | `/api/books/:id` | Update an existing book |
| DELETE | `/api/books/:id` | Remove a book           |

#### Book Schema

```schema (use Joi for that)
{
  title: string;       // required
  author: string;      // required
  isbn: string;        // required, unique
  publishedYear?: number;
  genre?: string;
}
```

## 🚀 Getting Started

1. Install dependencies:

```bash
yarn
```

2. Run the development server:

```bash
yarn start
```

## 📋 Evaluation Criteria

Your submission will be evaluated based on:

- ✨ Code organization and structure
- 🎯 REST API design principles
- 🛡️ Error handling and input validation

## ⚠️ Notes

- Focus on code quality over quantity
- Comment your code where necessary
- Don't worry about authentication/authorization
