const pool = require("../db");

async function insertOrder(order) {
  const query = `
    INSERT INTO orders (product_id, quantity, price)
    VALUES ($1, $2, $3)
    RETURNING *
  `;

  const values = [
    order.productId,
    order.quantity,
    order.price
  ];

  const { rows } = await pool.query(query, values);
  return rows[0];
}

async function findAll() {
  const { rows } = await pool.query("SELECT * FROM orders");
  return rows;
}

module.exports = {
  insertOrder,
  findAll
};
