const express = require('express');
const app = express();

app.use(express.json());

const businesses = [
  { id: 1, name: "Restaurante Don José", category: "Restaurante", address: "Calle 10 #20-30" },
  { id: 2, name: "Ferretería El Tornillo", category: "Ferretería", address: "Carrera 5 #12-40" },
  { id: 3, name: "Panadería La Espiga", category: "Panadería", address: "Calle 8 #15-20" },
  { id: 4, name: "Café Aroma", category: "Cafetería", address: "Carrera 7 #22-10" },
  { id: 5, name: "Tienda La Economía", category: "Tienda", address: "Calle 12 #18-50" },
  { id: 6, name: "Restaurante El Sabor", category: "Restaurante", address: "Carrera 3 #10-25" },
  { id: 7, name: "Papelería Mundo Escolar", category: "Papelería", address: "Calle 9 #14-60" },
  { id: 8, name: "Supermercado La Canasta", category: "Supermercado", address: "Carrera 6 #11-35" },
  { id: 9, name: "Pizzería Napoli", category: "Restaurante", address: "Calle 15 #25-45" },
  { id: 10, name: "Lavadero Clean Car", category: "Servicios", address: "Carrera 8 #19-70" }
];

// GET negocios
app.get('/business', (req, res) => {
  res.json(businesses);
});

// POST negocio
app.post('/business', (req, res) => {
  const business = req.body;
  businesses.push(business);
  res.json(business);
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Business Service running');
  });
}

module.exports = app;