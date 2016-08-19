const expect = require('chai').expect;
const request = require('supertest');

describe('Guild Routes', () => {
  let server;
  let guild;

  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });

  // Test for Multiple Guilds
  it('GET /api/v1/guilds returns multiple guilds', (done) => {
    request(server)
      .get('/api/v1/guilds')
      .set('Accept', 'guildlication/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        const guilds = res.body;

        // Save one single guild from the list to test on in later tests
        this.guild = guilds[0];

        expect(guilds.length).to.be.above(0);
      })
      .end(done);
  });

  // Test for a single guild
  it('GET /api/v1/guilds/:id returns an guild obj with id, name, description, '
  + 'and releaseDate properties', (done) => {
    request(server)
      .get('/api/v1/guilds/' + this.guild.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        guild = res.body;
        expect(guild).to.have.property('id');
        expect(guild).to.have.property('name');
      })
      .end(done);
  });
});
