const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

// USERS
app.get('/users', async (req, res) => {
  const response = await axios.get('http://users-service:3000/users');
  res.json(response.data);
});

app.post('/users', async (req, res) => {
  const response = await axios.post('http://users-service:3000/users', req.body);
  res.json(response.data);
});

// BUSINESS 
app.get('/business', async (req, res) => {
  const response = await axios.get('http://business-service:3000/business');
  res.json(response.data);
});

app.post('/business', async (req, res) => {
  const response = await axios.post('http://business-service:3000/business', req.body);
  res.json(response.data);
});

// ORDERS
app.get('/orders', async (req, res) => {
  const response = await axios.get('http://orders-service:3000/orders');
  res.json(response.data);
});

app.post('/orders', async (req, res) => {
  const response = await axios.post('http://orders-service:3000/orders', req.body);
  res.json(response.data);
});

// SEARCH 🔍
app.get('/search', async (req, res) => {
  const response = await axios.get('http://search-service:3000/search', {
    params: req.query
  });
  res.json(response.data);
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Gateway running');
  });
}

module.exports = app;