const express = require("express");
const router = express.Router();
const orderService = require("../services/order.service");

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     responses:
 *       200:
 *         description: List of orders
 */
router.get("/orders", (req, res) => {
  res.json(orderService.getOrders());
});
/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *
 *     responses:
 *       201:
 *         description: Order created
 */
router.post("/orders", async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/orders", async (req, res) => {
  const orders = await orderService.getOrders();
  res.json(orders);
});

module.exports = router;
