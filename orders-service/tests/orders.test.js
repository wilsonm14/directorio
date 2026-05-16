const request = require('supertest');
const app = require('../index');
const axios = require('axios'); // 1. Importas la librería de comunicación

jest.mock('axios'); // 2. Simulas axios para que no intente salir a internet

describe('Orders API', () => {

  test('GET /orders responde 200', async () => {
    
    // 3. Simulas lo que sea que 'orders-service' le pida a los otros servicios
    // (Ej: Si pide info de un usuario o un negocio, le devuelve un éxito simulado)
    axios.get.mockResolvedValue({
      status: 200,
      data: { id: '123', status: 'active', message: 'Simulado correctamente' }
    });

    const response = await request(app).get('/orders');

    // 4. Ahora responderá 200 sin caer en el catch del 500
    expect(response.statusCode).toBe(200);
  });

});
