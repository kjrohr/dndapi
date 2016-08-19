const expect = require('chai').expect;
const request = require('supertest');

describe('Faction Routes', () => {
  let server;
  let faction;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Factions
  it('GET /api/v1/factions returns multiple factions', (done) => {
    request(server)
      .get('/api/v1/factions')
      .set('Accept', 'factionlication/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const factions = res.body;

        // Save one single faction from the list to test on in later tests
        this.faction = factions[0];

        expect(factions.length).to.be.above(0);
      })
      .end(done);
  });

  // Test for a single faction
  it('GET /api/v1/factions/:id returns an faction obj with id, title, description, and releaseDate properties', (done) => {
    request(server)
      .get('/api/v1/factions/' + this.faction.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const faction = res.body;
        expect(faction).to.have.property('id');
        expect(faction).to.have.property('name');
      })
      .end(done);
  });
});
