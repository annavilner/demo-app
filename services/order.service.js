const orderRepository = require("../data/repository/order.repository");

async function createOrder(data) {
  if (!data.productId || !data.quantity) {
    throw new Error("productId and quantity are required");
  }

  return await orderRepository.insertOrder({
    productId: data.productId,
    quantity: data.quantity,
    price: data.price
  });
}

async function getOrders() {
  return await orderRepository.findAll();
}

module.exports = {
  createOrder,
  getOrders
};
