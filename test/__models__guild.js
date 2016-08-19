const expect = require('chai').expect;
const request = require('supertest');
const faker = require('faker');
const Guild = require('../src/models/guild');

describe('guild Model', () => {
  let server;
  let testGuilds;
  let tempGuild;


  // Test for all guilds
  it('Gets All', (done) => {
    Guild.all(
      (err) => {
        throw new Error(err);
      },
      (guilds) => {
        this.testGuilds = guilds;
        expect(this.testGuilds.length).to.be.above(0);
        done();
      }
    );
  });

  // Add a guild
  it('Adds a new guild', (done) => {
    // Generate a fake guild with a random name
    const fakeGuild = { name: faker.name.firstName(),
    description: faker.company.catchPhrase() };

    // Call guild model for adding
    Guild.add(fakeGuild,
      (err) => {
        throw new Error(err);
      },
      (guild) => {
        // Save the returned data for later use in tests
        this.tempGuild = guild.dataValues;

        // guild.name returned from model should match guild.name supplied
        expect(guild.name).to.be.equal(fakeGuild.name);
        expect(guild.description).to.be.equal(fakeGuild.description);
        done();
      }
    );
  });

  // Find a guild
  it('Find a guild', (done) => {
    // Generate a fake guild with a random name
    const targetGuild = this.testGuilds[0];
    // Call guild model for finding
    Guild.one(targetGuild,
      (err) => {
        throw new Error(err);
      },
      (guild) => {
        // guild.name returned from model should match guild.name supplied
        expect(guild.name).to.be.equal(targetGuild.name);
        done();
      }
    );
  });

  // Update a guild
  it('Update a guild', (done) => {
    // Load in the info for an existing guild
    const updateGuild = this.tempGuild;
    // Generate a new name for hte guild
    updateGuild.name = 'Not A Real Name';
    updateGuild.description = 'Not a real description';
    // Call guild model for updating
    Guild.update(updateGuild,
      (err) => {
        throw new Error(err);
      },
      (guild) => {
        // Save the returned data for later use in tests
        this.tempGuild = guild;
        // guild.name returned from model should match guild.name supplied
        expect(guild.name).to.be.equal(updateGuild.name);
        expect(guild.description).to.be.equal(updateGuild.description);
        done();
      }
    );
  });

  // Remove a guild
  it('Remove a guild', (done) => {
    // Load in the info for an existing guild
    const removeGuild = this.tempGuild;
    removeGuild.force = true;

    // Call guild model for updating
    Guild.remove(removeGuild,
      (err) => {
        throw new Error(err);
      },
      (response) => {
        // if successfully removed a 1 should be returned
        expect(response).to.be.equal(1);
        done();
      }
    );
  });
});
