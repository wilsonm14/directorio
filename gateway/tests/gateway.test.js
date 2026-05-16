const request = require('supertest');
const app = require('../index');

describe('Gateway API', () => {

  test('GET gateway responde', async () => {

    const response = await request(app).get('/');

    expect(response.statusCode).toBeDefined();

  });

});