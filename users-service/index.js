const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Juan", email: "juan@mail.com" },
  { id: 2, name: "Ana", email: "ana@mail.com" },
  { id: 3, name: "Carlos", email: "carlos@mail.com" },
  { id: 4, name: "Luisa", email: "luisa@mail.com" },
  { id: 5, name: "Pedro", email: "pedro@mail.com" },
  { id: 6, name: "Sofía", email: "sofia@mail.com" },
  { id: 7, name: "Miguel", email: "miguel@mail.com" },
  { id: 8, name: "Valentina", email: "valentina@mail.com" },
  { id: 9, name: "Andrés", email: "andres@mail.com" },
  { id: 10, name: "Camila", email: "camila@mail.com" }
];

// GET usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

// POST usuario
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Users Service running');
  });
}

module.exports = app;