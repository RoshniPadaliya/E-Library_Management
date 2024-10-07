# E-Library Management Backend

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-v14.0.0-green.svg)
![Express](https://img.shields.io/badge/express-v4.18.2-brightgreen.svg)
![MongoDB](https://img.shields.io/badge/mongodb-v7.2.2-green.svg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Use Cases](#use-cases)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [Authentication](#authentication)
    - [Register User](#register-user)
    - [Login User](#login-user)
  - [Book Management](#book-management)
    - [Create Book](#create-book)
    - [Get All Books](#get-all-books)
    - [Get Book by ID](#get-book-by-id)
    - [Update Book](#update-book)
    - [Delete Book](#delete-book)
  - [Borrowing Operations](#borrowing-operations)
    - [Borrow Book](#borrow-book)
    - [Return Book](#return-book)
- [Error Handling](#error-handling)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Introduction

Welcome to the **E-Library Management Backend**, a robust and scalable backend API built using **Node.js** and **Express.js**. This API facilitates user authentication, book management, and borrowing/returning operations, serving as the backbone for an E-Library Management Application. It leverages **MongoDB** for data storage and ensures secure operations through JWT-based authentication.

---

## Features

- **User Authentication**
  - User registration and login with JWT-based authentication.
  - Role-based access control (User and Admin roles).

- **Book Management**
  - Create, read, update, and delete (CRUD) operations for books.
  - Detailed book information including title, author, genre, availability, and borrower details.

- **Borrowing Operations**
  - Users can borrow available books.
  - Users can return borrowed books.
  - Real-time updates on book availability.

- **Robust Error Handling**
  - Consistent and informative error responses.
  - Validation for all inputs and operations.

- **Security**
  - Password hashing with bcrypt.
  - Protected routes ensuring only authorized access.

- **Logging and Monitoring**
  - HTTP request logging with Morgan.
  - Environment variable management with dotenv.

---

## Use Cases

### 1. User Registration and Authentication

- **Register**: New users can create an account by providing their name, email, and password.
- **Login**: Registered users can log in using their email and password to receive a JWT for authenticated requests.

### 2. Book Management

- **Admin Operations**:
  - **Add New Books**: Admins can add new books to the library.
  - **Update Book Details**: Admins can update existing book information.
  - **Delete Books**: Admins can remove books from the library.

- **User Operations**:
  - **View Books**: Users can view a list of all books or details of a specific book.

### 3. Borrowing and Returning Books

- **Borrow Book**: Authenticated users can borrow available books, which updates the book's availability and records the borrower.
- **Return Book**: Users can return books they have borrowed, updating the book's availability and clearing the borrower record.

### 4. Role-Based Access Control

- **Admin**: Full access to all operations including book management.
- **User**: Limited to viewing books and managing their own borrowing activities.

---

## Technology Stack

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs
- **Logging**: Morgan
- **Environment Management**: dotenv
- **Version Control**: Git

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/e-library-backend.git
   cd e-library-backend
Install Dependencies

npm install

Or using yarn:
yarn install


Environment Variables

Create a .env file in the root directory to store environment-specific variables.

env

Copy code

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

NODE_ENV=development

PORT: The port number the server will listen on.

MONGO_URI: Your MongoDB connection string.

JWT_SECRET: A secret key for signing JWT tokens.

NODE_ENV: Set to development or production.
