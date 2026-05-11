const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const orders = [
  { id: 1, userId: 1, businessId: 2 },
  { id: 2, userId: 2, businessId: 1 },
  { id: 3, userId: 3, businessId: 3 },
  { id: 4, userId: 4, businessId: 4 },
  { id: 5, userId: 5, businessId: 5 },
  { id: 6, userId: 6, businessId: 6 },
  { id: 7, userId: 7, businessId: 7 },
  { id: 8, userId: 8, businessId: 8 },
  { id: 9, userId: 9, businessId: 9 },
  { id: 10, userId: 10, businessId: 1 }
];

// 🔥 GET con composición de datos
app.get('/orders', async (req, res) => {
  try {
    const result = [];

    for (let order of orders) {
     
      // usuario
      const userResponse = await axios.get('http://host.docker.internal:3001/users');
      
      const user = userResponse.data.find(u => u.id === order.userId);

      // negocio
      const businessResponse = await axios.get('http://host.docker.internal:3002/business');
      
      const business = businessResponse.data.find(b => b.id === order.businessId);

      result.push({
        id: order.id,
        user,
        business
      });
    }

    res.json(result);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error obteniendo orders" });
  }
});

// POST
app.post('/orders', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json(order);
});

app.listen(3000, () => {
  console.log("Orders Service running on port 3000");
});
