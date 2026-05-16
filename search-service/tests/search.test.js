const request = require('supertest');
const app = require('../index');
const axios = require('axios'); // 1. Importa axios (o la librería que uses)

// 2. Dile a Jest que simule por completo la librería axios
jest.mock('axios');

describe('Search API', () => {

  test('GET /search responde 200', async () => {
    
    // 3. Simula la respuesta que devolvería el otro microservicio de forma exitosa
    axios.get.mockResolvedValue({
      status: 200,
      data: [
        { id: 1, name: 'Negocio de Prueba', category: 'Restaurante' }
      ]
    });

    // 4. Ejecuta la petición al servicio local de búsqueda
    const response = await request(app).get('/search');

    // Ahora debería responder 200 en lugar de 500
    expect(response.statusCode).toBe(200);
  });

});
