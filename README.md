# HNGx-Task-Two

## User Management CRUD App

User Management CRUD App is a web application that allows you to perform CRUD (Create, Read, Update, Delete) operations on user data. It provides an interface for managing user information, including first name, last name, city, and country.

### Features

- Create a new user by providing their personal information, which includes first name, last name, city and country.
- Read and view user information,
- Update user information, such as changing their names, city and country
- Delete a user to remove them from the system.
  
### Technologies Used

- **Express.js:** A web application framework for Node.js that provides an easy-to-use interface for building web applications and APIs.
- **MongoDB:** A popular NoSQL database that provides scalability and flexibility for storing and retrieving user data.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js that simplifies data manipulation and validation.

### Setup and Installation

1. Clone the repository and navigate to the project directory.
2. Install the required dependencies by running `npm install`.
3. Make sure you have MongoDB installed and running on your system.
4. Modify the database connection settings in `app.js` if needed.
5. Start the server by running `node app.js`.
6. Access the application in your web browser at <http://localhost:3000>.

### API Endpoints

The following API endpoints are available:

- **POST api/user:** Create a new user by providing user information in the request body.
- **GET /user:** Retrieve a list of all users.
- **GET /user/:id:** Retrieve a specific user by their ID.
- **PATCH /user/:id:** Update a specific user by their ID, providing updated user information in the request body.
- **DELETE /user/:id:** Delete a specific user by their ID.
  
### API Request Formats

Create User

**Endpoint:** POST /api

**Headers:**

- Content-Type: application/json

**Body:**

```json
{
  "firstName": "UserFirstName",
  "lastName": "UserLastName",
  "city": "userCity",
  "country": "userCountry"
}
```

Response (Success):

**Status Code:** 201 Created

**Body:**

```json
{
    "userId": "6501c8938087c75d6c4bb9a4",
  "firstName": "UserFirstName",
  "lastName": "UserLastName",
  "city": "userCity",
  "country": "userCountry"
}
```

Read Users
Request:

**Endpoint:** GET /api/

Response (Success):

**Status Code:** 200 OK

**Body:**

```json
{
 "users":[
    {
        "firstName": "UserFirstName",
        "lastName": "UserLastName",
        "city": "userCity",
        "country": "userCountry"
    },
    {
        "firstName": "UserFirstName",
        "lastName": "UserLastName",
        "city": "userCity",
       "country": "userCountry"
    }
 ]
}
```

Update User
Request:

markdown
Copy code
**Endpoint:** PUT /api/{id}

**Headers:**
- Content-Type: application/json

**Body:**
```json
{
  "firstName": "newUserFirstName"
}
``````

Response (Success):

**Status Code:** 200 OK

**Body:**
```json
{
    "firstName": "newUserFirstName",
    "lastName": "UserLastName",
    "city": "userCity",
    "country": "userCountry"
}
``````