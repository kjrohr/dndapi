const expect = require('chai').expect;
const faker = require('faker');
const Player = require('../src/models/player');

describe('player Model', () => {
  // let server;
  let testPlayers;
  let tempPlayer;


  // Test for all players
  it('Gets All', (done) => {
    Player.all(
      (err) => {
        throw new Error(err);
      },
      (players) => {
        this.testPlayers = players;
        expect(this.testPlayers.length).to.be.above(0);
        done();
      }
    );
  });

  // Add a player
  it('Adds a new player', (done) => {
    // Generate a fake player with a random name
    const fakePlayer = { name: faker.name.firstName(),
    race: faker.lorem.words(),
    class: faker.lorem.words(),
    level: faker.random.number(),
    };

    // Call player model for adding
    Player.add(fakePlayer,
      (err) => {
        throw new Error(err);
      },
      (player) => {
        // Save the returned data for later use in tests
        this.tempPlayer = player.dataValues;

        // player.name returned from model should match player.name supplied
        expect(player.name).to.be.equal(fakePlayer.name);
        done();
      }
    );
  });

  // Find a player
  it('Find a player', (done) => {
    // Generate a fake player with a random name
    const targetPlayer = this.testPlayers[0];
    // Call player model for finding
    Player.one(targetPlayer,
      (err) => {
        throw new Error(err);
      },
      (player) => {
        // player.name returned from model should match player.name supplied
        expect(player.name).to.be.equal(targetPlayer.name);
        done();
      }
    );
  });

  // Update a player
  it('Update a player', (done) => {
    // Load in the info for an existing player
    const updatePlayer = this.tempPlayer;
    // Generate a new name for hte player
    updatePlayer.name = 'Not A Real Name';
    updatePlayer.race = 'Forsaken';
    updatePlayer.class = 'Warrior';
    // Call player model for updating
    Player.update(updatePlayer,
      (err) => {
        throw new Error(err);
      },
      (player) => {
        // Save the returned data for later use in tests
        this.tempPlayer = player;
        // player.name returned from model should match player.name supplied
        expect(player.name).to.be.equal(updatePlayer.name);
        expect(player.race).to.be.equal(updatePlayer.race);
        expect(player.class).to.be.equal(updatePlayer.class);
        done();
      }
    );
  });

  // Remove a player
  it('Remove a player', (done) => {
    // Load in the info for an existing player
    const removePlayer = this.tempPlayer;
    removePlayer.force = true;

    // Call player model for updating
    Player.remove(removePlayer,
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
