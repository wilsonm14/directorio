const request = require('supertest');
const app = require('../index');

describe('Business API', () => {

  test('GET /business responde 200', async () => {

    const response = await request(app).get('/business');

    expect(response.statusCode).toBe(200);

  });

});