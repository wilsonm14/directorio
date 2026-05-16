const request = require('supertest');
const app = require('../index');
const axios = require('axios');

// Interceptamos Axios por completo
jest.mock('axios');

describe('Orders API', () => {

  test('GET /orders responde 200', async () => {
    
    // Configuramos el comportamiento dinámico de Axios para simular las respuestas de la API
    axios.get.mockImplementation((url) => {
      if (url.includes('/users')) {
        return Promise.resolve({
          status: 200,
          data: [
            { id: 1, name: 'Usuario 1' },
            { id: 2, name: 'Usuario 2' },
            { id: 3, name: 'Usuario 3' },
            { id: 4, name: 'Usuario 4' },
            { id: 5, name: 'Usuario 5' },
            { id: 6, name: 'Usuario 6' },
            { id: 7, name: 'Usuario 7' },
            { id: 8, name: 'Usuario 8' },
            { id: 9, name: 'Usuario 9' },
            { id: 10, name: 'Usuario 10' }
          ]
        });
      }
      
      if (url.includes('/business')) {
        return Promise.resolve({
          status: 200,
          data: [
            { id: 1, name: 'Negocio 1' },
            { id: 2, name: 'Negocio 2' },
            { id: 3, name: 'Negocio 3' },
            { id: 4, name: 'Negocio 4' },
            { id: 5, name: 'Negocio 5' },
            { id: 6, name: 'Negocio 6' },
            { id: 7, name: 'Negocio 7' },
            { id: 8, name: 'Negocio 8' },
            { id: 9, name: 'Negocio 9' },
            { id: 10, name: 'Negocio 10' }
          ]
        });
      }
      
      return Promise.resolve({ status: 200, data: [] });
    });

    // Ejecutamos la petición hacia el endpoint bajo prueba
    const response = await request(app).get('/orders');

    // Validamos que responda exitosamente el código 200
    expect(response.statusCode).toBe(200);
    
    // Verificación extra opcional: comprobar que compuso la estructura esperada
    expect(response.body.length).toBe(10);
    expect(response.body[0]).toHaveProperty('user');
    expect(response.body[0]).toHaveProperty('business');
  });

});
