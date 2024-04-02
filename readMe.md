# Hotel Management System

## Description

This project is a Hotel Management System developed using TypeScript, Express.js, and MongoDB. It provides APIs for managing rooms, room types, users, and authentication.

## Features

- **Authentication**: JWT-based authentication for user login.
- **Authorization**: Role-based access control (RBAC) for different user roles (admin, user, etc.).
- **Room Management**: CRUD operations for managing rooms.
- **Room Type Management**: CRUD operations for managing room types.
- **User Management**: CRUD operations for managing users.
- **Validation**: Data validation using Joi schema.
- **Error Handling**: Proper error handling for API requests.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Hotel_management_system_Typescript
   Install dependencies:
   ```

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the project root.
Define the following environment variables in the .env file:
makefile
Copy code
PORT=4000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
Start the server:

bash
Copy code
npm start
API Endpoints
Authentication
POST /api/v1/login
Description: User login endpoint
Request Body:
json
Copy code
{
"username": "username",
"password": "password"
}
Response:
json
Copy code
{
"token": "<jwt-token>"
}
Room Management
GET /api/v1/rooms
Description: Get all rooms
POST /api/v1/rooms
Description: Create a new room (admin only)
Request Body:
json
Copy code
{
"name": "Room Name"
}
GET /api/v1/rooms/:id
Description: Get a room by ID
PUT /api/v1/rooms/:id
Description: Update a room by ID (admin only)
Request Body:
json
Copy code
{
"name": "Updated Room Name"
}
DELETE /api/v1/rooms/:id
Description: Delete a room by ID (admin only)
Room Type Management
GET /api/v1/room-types
Description: Get all room types
POST /api/v1/room-types
Description: Create a new room type (admin only)
Request Body:
json
Copy code
{
"name": "Room Type Name"
}
GET /api/v1/room-types/:id
Description: Get a room type by ID
PUT /api/v1/room-types/:id
Description: Update a room type by ID (admin only)
Request Body:
json
Copy code
{
"name": "Updated Room Type Name"
}
DELETE /api/v1/room-types/:id
Description: Delete a room type by ID (admin only)
User Management
GET /api/v1/users
Description: Get all users
GET /api/v1/users/:id
Description: Get a user by ID
PUT /api/v1/users/:id
Description: Update a user by ID
Request Body:
json
Copy code
{
"username": "New Username",
"password": "New Password",
"role": "New Role"
}
DELETE /api/v1/users/:id
Description: Delete a user by ID
License
This project is licensed under the MIT License.
