const request = require('supertest');
const app = require('../index');

describe('Orders API', () => {

  test('GET /orders responde 200', async () => {

    const response = await request(app).get('/orders');

    expect(response.statusCode).toBe(200);

  });

});