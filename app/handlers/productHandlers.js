// Importing the ProductService class
const Products = require("../service/productService");

// Creating an instance of the ProductService class
const products = new Products();

// Handling the request to fetch all products
const fetchAllProductsHandler = (req, res) => {
  // Setting the response header
  res.setHeader("Content-Type", "application/json");

  // Checking if the request method is GET
  if (req.method === "GET") {
    // Setting a success status code
    res.statusCode = 200;

    // Logging the API call for fetching all products
    console.log(`${new Date()} - API called for fetching all products`);

    // Sending the JSON response with all products
    res.end(JSON.stringify(products.getAllProducts()));
  } else {
    // Handling case where the route is not found
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);

    // Sending a JSON response for route not found
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

// Handling the request to fetch a product by its ID
const fetchProductByIdHandler = (req, res, productId) => {
  // Setting the response header
  res.setHeader("Content-Type", "application/json");

  // Checking if the request method is GET
  if (req.method === "GET") {
    // Setting a success status code
    res.statusCode = 200;

    // Fetching the product by ID
    const product = products.getProductById(productId);

    // Logging the API call for fetching a product by ID
    console.log(
      `${new Date()} - API called for fetching product using the provided id`
    );

    // Sending the JSON response with the product or a message if not found
    res.end(
      JSON.stringify(
        product
          ? product
          : { message: `Product with id ${productId} was not found` }
      )
    );
  } else {
    // Handling case where the route is not found
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);

    // Sending a JSON response for route not found
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

// Exporting the handlers for external use
module.exports = {
  fetchAllProductsHandler,
  fetchProductByIdHandler,
};