const expect = require('chai').expect;
const request = require('supertest');

describe('Player Routes', () => {
  let server;
  let player;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Players
  it('GET /api/v1/players returns multiple players', (done) => {
    request(server)
      .get('/api/v1/players')
      .set('Accept', 'playerlication/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const players = res.body;

        // Save one single player from the list to test on in later tests
        this.player = players[0];

        expect(players.length).to.be.above(0);
      })
      .end(done);
  });

  // Test for a single player
  it('GET /api/v1/players/:id returns an player obj with id, title, description, and releaseDate properties', (done) => {
    request(server)
      .get('/api/v1/players/' + this.player.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const player = res.body;
        expect(player).to.have.property('id');
        expect(player).to.have.property('name');
      })
      .end(done);
  });
});
