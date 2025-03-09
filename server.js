const http = require("http");
const url = require("url");

// Importing handlers for products and users
const producthandlers = require("./app/handlers/productHandlers");
// WRITE YOUR CODE HERE TO IMPORT USER HANDLER

// Creating an HTTP server
// EXPLAIN THE CODE OF CREATING SERVER AND PARSING URL
const server = http.createServer((req, res) => {
  // Extracting and parsing the request URL
  const requestUrl = req.url;
  const parts = url.parse(requestUrl, true);

  // Handling different routes based on the pathname
  switch (parts.pathname) {
    // Handling product-related routes
    case "/v1/products": {
      const { id } = parts.query;
      if (id) {
        // Handling product retrieval by ID
        return producthandlers.fetchProductByIdHandler(req, res, id);
      } else {
        // Handling request for all products
        return producthandlers.fetchAllProductsHandler(req, res);
      }
    }

    // Handling user-related routes
    // WRITE YOUR CODE TO HANDLE USER RELATED ROUTES\

    // Handling login route
    // WRITE YOUR CODE TO HANDLE LOGIN ROUTE

    // Handling default case for unknown routes
    // EXPLAIN THE DEFAULT CASE
    default: {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      console.log(`${new Date()} - Route not found`);
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  }
});

// Setting the server to listen on port 8080
// EXPLAIN THE SERVER SETTING
const port = 8080;
server.listen(port, () => {
  console.log(`${new Date()} - Server is running on port ${port}`);
});
