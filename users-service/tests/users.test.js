const request = require('supertest');
const app = require('../index');

describe('Users API', () => {

  test('GET /users responde 200', async () => {

    const response = await request(app).get('/users');

    expect(response.statusCode).toBe(200);

  });

});