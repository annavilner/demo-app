const express = require("express");
const router = express.Router();
const productService = require("../services/product.service");

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: List of products
 */
router.get("/products", (req, res) => {
  res.json(productService.getProducts());
});

module.exports = router;
