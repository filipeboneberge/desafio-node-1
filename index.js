const express = require("express");
const uuid = require("uuid");

const app = express();
app.use(express.json());
const port = 3000;

const orders = [];

const ckeckMethodUrl = (request, response, next) => {
  const method = request.method;
  const url = request.url;

  console.log(`[${method}] - ${url}`);

  next();
};

const checkOrderId = (request, response, next) => {
  const { id } = request.params;
  const index = orders.findIndex((order) => order.id === id);

  if (index < 0) {
    return response.status(404).json("Order not found");
  }

  request.orderId = id;
  request.orderIndex = index;

  next();
};

app.get("/order", ckeckMethodUrl, (request, response) => {
  return response.json(orders);
});

app.post("/order", ckeckMethodUrl, (request, response) => {
  const { order, clienteName, price } = request.body;
  const newOrder = {
    id: uuid.v4(),
    order,
    clienteName,
    price,
    status: "Em preparação",
  };
  orders.push(newOrder);
  return response.status(201).json(newOrder);
});

app.put("/order/:id", ckeckMethodUrl, checkOrderId, (request, response) => {
  const id = request.orderId;
  const index = request.orderIndex;

  const { order, clienteName, price } = request.body;
  const updatedOrder = {
    id,
    order,
    clienteName,
    price,
    status: "Em preparação",
  };

  orders[index] = updatedOrder;

  return response.json(updatedOrder);
});

app.delete("/order/:id", ckeckMethodUrl, checkOrderId, (request, response) => {
  const index = request.orderIndex;

  orders.splice(index, 1);

  return response.status(204).json();
});

app.get("/order/:id", ckeckMethodUrl, checkOrderId, (request, response) => {
  const index = request.orderIndex;

  return response.json(orders[index]);
});

app.patch("/order/:id", ckeckMethodUrl, checkOrderId, (request, response) => {
  const index = request.orderIndex;

  orders[index].status = "Pronto";

  return response.json(orders[index]);
});

app.listen(port, () => {
  console.log(`🚀 Started on port ${port}`);
});
