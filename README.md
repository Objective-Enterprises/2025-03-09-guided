# Node Server API Documentation

This document provides instructions for interacting with the Node server and details the available APIs and their endpoints.

## Setup

To run the server, execute the following command:

```
node server.js
```

The server will run on the following base URL:

```
http://localhost:8080
```

## APIs

### Retrieve List of Products

This endpoint retrieves a list of products.

- HTTP Method: GET
- URL: `/v1/products`

#### Query Parameters

- None

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
[
    {
        "id": ...,
        "title": ...,
        ...
    },
    {
        "id": ...,
        "title": ...,
        ...
    }
]
```

### Retrieve Specific Product

This endpoint retrieves a specific product by ID.

- HTTP Method: GET
- URL: `/v1/products?id=2`

#### Query Parameters

- id (required): The ID of the product.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "title": ...,
    ...
}
```

### Retrieve List of Users

This endpoint retrieves a list of users.

- HTTP Method: GET
- URL: `/v1/users`

#### Query Parameters

- None

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
[
    {
        "id": ...,
        "username": ...,
        ...
    },
    {
        "id": ...,
        "username": ...,
        ...
    }
]
```

### Retrieve Specific User

This endpoint retrieves a specific user by username.

- HTTP Method: GET
- URL: `/v1/users?username=john`

#### Query Parameters

- username (required): The username of the user.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "username": ...,
    ...
}
```

### User Login

This endpoint retrieves a specific user based on the provided username and password in the request body.

- HTTP Method: POST
- URL: `/v1/login`

#### Request Body

- username (required): The username of the user.
- password (required): The password of the user.

#### Response

- Status: 200 OK
- Content-Type: application/json

Example Response:

```json
{
    "id": ...,
    "username": ...,
    ...
}
```
