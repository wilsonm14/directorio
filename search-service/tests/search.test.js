const request = require('supertest');
const app = require('../index');

describe('Search API', () => {

  test('GET /search responde 200', async () => {

    const response = await request(app).get('/search');

    expect(response.statusCode).toBe(200);

  });

});