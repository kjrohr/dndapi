const expect = require('chai').expect;
const request = require('supertest');
const faker = require('faker');
const Faction = require('../src/models/faction');

describe('faction Model', () => {
  let server;
  let testFactions;
  let tempFaction;


  // Test for all factions
  it('Gets All', (done) => {
    Faction.all(
      (err) => {
        throw new Error(err);
      },
      (factions) => {
        this.testFactions = factions;
        expect(this.testFactions.length).to.be.above(0);
        done();
      }
    );
  });

  // Add a faction
  it('Adds a new faction', (done) => {
    // Generate a fake faction with a random name
    const fakeFaction = { name: faker.name.firstName() };

    // Call faction model for adding
    Faction.add(fakeFaction,
      (err) => {
        throw new Error(err);
      },
      (faction) => {
        // Save the returned data for later use in tests
        this.tempFaction = faction.dataValues;

        // faction.name returned from model should match faction.name supplied
        expect(faction.name).to.be.equal(fakeFaction.name);
        done();
      }
    );
  });

  // Find a faction
  it('Find a faction', (done) => {
    // Generate a fake faction with a random name
    const targetFaction = this.testFactions[0];
    // Call faction model for finding
    Faction.one(targetFaction,
      (err) => {
        throw new Error(err);
      },
      (faction) => {
        // faction.name returned from model should match faction.name supplied
        expect(faction.name).to.be.equal(targetFaction.name);
        done();
      }
    );
  });

  // Update a faction
  it('Update a faction', (done) => {
    // Load in the info for an existing faction
    const updateFaction = this.tempFaction;
    // Generate a new name for hte faction
    updateFaction.name = 'Not A Real Name';
    // Call faction model for updating
    Faction.update(updateFaction,
      (err) => {
        throw new Error(err);
      },
      (faction) => {
        // Save the returned data for later use in tests
        this.tempFaction = faction;
        // faction.name returned from model should match faction.name supplied
        expect(faction.name).to.be.equal(updateFaction.name);
        done();
      }
    );
  });

  // Remove a faction
  it('Remove a faction', (done) => {
    // Load in the info for an existing faction
    const removeFaction = this.tempFaction;
    removeFaction.force = true;

    // Call faction model for updating
    Faction.remove(removeFaction,
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
