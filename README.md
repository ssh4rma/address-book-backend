# Address Book Backend Application

## Overview

This project is a backend-only Address Book Application built using Node.js and Express.js, following the MVC architecture. It implements basic CRUD operations with route handling, and includes JWT-based authentication using a dummy login system.

---

## Technologies Used

- Node.js
- Express.js
- JWT (JSON Web Token)
- MVC Architecture

---

## Authentication

Although this is a backend system without a full user login module, a dummy login mechanism has been implemented to demonstrate JWT-based authentication.  
- On login, a hardcoded user credential is validated.
- A valid JWT is returned, which is required for accessing protected routes.

---

## API Endpoints

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| POST   | `/login`         | Generate JWT token     |
| GET    | `/contacts`      | Get all contacts       |
| POST   | `/contacts`      | Add a new contact      |
| PUT    | `/contacts/:id`  | Update a contact       |
| DELETE | `/contacts/:id`  | Delete a contact       |

