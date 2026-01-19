const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
require("dotenv").config();
const newLocal = require("express");





const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const warehouseRoutes = require("./routes/warehouse.routes");

const app = express();

app.use(express.json()); // 🔥 REQUIRED
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", warehouseRoutes);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/swagger`);
});
