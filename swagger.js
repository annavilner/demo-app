const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Demo Product & Order API",
      version: "1.0.0",
      description: "Demo app with Product, Order, and Warehouse services"
    },
    components: {
      schemas: {
        Order: {
          type: "object",
          required: ["productId", "quantity"],
          properties: {
            productId: {
              type: "integer",
              example: 1
            },
            quantity: {
              type: "integer",
              example: 2
            }
          }
        }
      }
    }
  },
  apis: ["./routes/*.js"]
};

module.exports = swaggerJsdoc(options);
