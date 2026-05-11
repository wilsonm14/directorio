const express = require('express');
const axios = require('axios');

const app = express();

// 🔍 Buscar negocios
app.get('/search', async (req, res) => {
  try {
    const { name, category } = req.query;

    // llamar al business-service
    const response = await axios.get('http://host.docker.internal:3002/business');
   
    let results = response.data;

    // filtrar por nombre
    if (name) {
      results = results.filter(b =>
        b.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    // filtrar por categoría
    if (category) {
      results = results.filter(b =>
        b.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    res.json(results);

  } catch (error) {
    res.status(500).json({ error: "Error en búsqueda" });
  }
});

app.listen(3000, () => {
  console.log("Search Service running on port 3000");
});

