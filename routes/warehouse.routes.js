const express = require("express");
const router = express.Router();
const warehouseService = require("../services/warehouse.service");

/**
 * @swagger
 * /api/supplies:
 *   get:
 *     summary: Get warehouse supplies
 *     responses:
 *       200:
 *         description: Stock information
 */
router.get("/supplies", (req, res) => {
  res.json(warehouseService.getSupplies());
});

module.exports = router;
