// Importing the file system module
const fs = require("fs");

// Creating a class for managing products
class Products {
  // Constructor to initialize the class with product data from a JSON file
  constructor() {
    // Reading and parsing the content of the products.json file
    this.products = JSON.parse(fs.readFileSync("./app/data/products.json", "utf-8"));
  }

  // Method to retrieve all products
  getAllProducts() {
    return this.products;
  }

  // Method to retrieve a product by its ID
  getProductById(id) {
    // Finding the product in the products array based on the provided ID
    const product = this.products.find((product) => product.id == id);

    // Returning the found product (or null if not found)
    return product;
  }
}

// Exporting the Products class for external use
module.exports = Products;