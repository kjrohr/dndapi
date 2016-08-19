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
    // Generate a fake guild with a random title
    const fakeGuild = { name: faker.name.firstName() };

    // Call guild model for adding
    Guild.add(fakeGuild,
      (err) => {
        throw new Error(err);
      },
      (guild) => {
        // Save the returned data for later use in tests
        this.tempGuild = guild.dataValues;

        // guild.title returned from model should match guild.title supplied
        expect(Guild.title).to.be.equal(fakeGuild.title);
        done();
      }
    );
  });

  // Find a guild
  it('Find a guild', (done) => {
    // Generate a fake guild with a random title
    const targetGuild = this.testGuilds[0];
    // Call guild model for finding
    Guild.one(targetGuild,
      (err) => {
        throw new Error(err);
      },
      (guild) => {
        // guild.title returned from model should match guild.title supplied
        expect(guild.name).to.be.equal(targetGuild.name);
        done();
      }
    );
  });

  // Update a guild
  it('Update a guild', (done) => {
    // Load in the info for an existing guild
    const updateGuild = this.tempGuild;
    // Generate a new title for hte guild
    updateGuild.name = 'Not A Real Name';
    // Call guild model for updating
    Guild.update(updateGuild,
      (err) => {
        throw new Error(err);
      },
      (guild) => {
        // Save the returned data for later use in tests
        this.tempGuild = guild;
        // guild.title returned from model should match guild.title supplied
        expect(guild.name).to.be.equal(updateGuild.name);
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
