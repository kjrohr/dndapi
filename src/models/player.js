// // Makes an instance of db.js and sets it to variable db
// WARNING: Same issue as guild.js
const db = require('./db');
const util = require('../../lib/util');

// Exports the add function which references the sequelize create method.
exports.add = (payload, err, success) => {
  db.player.create(payload).then(success).catch(err);
  util.debug('Player Model - Add a Player', 'name: '
  + payload.name + '\nrace: ' + payload.race + '\nclass: '
  + payload.class + '\nlevel: '
  + payload.level + '\nguild: ' + payload.guildID + '\nfaction: '
  + payload.factionId);
};

// Exports the all function which references the sequelize findAll method
// Possible For each function in here
exports.all = (err, success) => {
  db.player.findAll().then(success).catch(err);
  util.debug('Player Model - Find all Players', success);
};

// Exports the one funciton which references the sequelize find method
exports.one = (payload, err, success) => {
  db.player.find({
    where: {
      id: payload.id,
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then((data) => {
    // do debug
    util.debug('Player Model - Find a Player', 'id: ' + data.id + '\nname: ' + data.name
    + '\nrace: ' + data.race + '\nclass: '
    + data.class + '\nlevel: ' + data.level + '\nguild: ' + data.guildID + '\nfaction: '
    + data.factionId);
    success(data);
  }).catch(err);
};

// Exports remove which references the sequelize destroy method
exports.remove = (payload, err, success) => {
  db.player.destroy({
    where: {
      id: payload.id,
    },
  }).then((data) => {
    util.debug('Player Model - Delete a Player', 'Success?: ' + data);
    success(data);
  }).catch(err);
};

// Exports updates which references the sequelize find method
// then takes the existing Data and updates the attributes
exports.update = (payload, err, success) => {
  db.player.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    util.debug('Player Model - Update a Player - Old Data', 'id: ' + existingData.id + '\nname: '
    + existingData.name + '\nrace: ' + existingData.race + '\nclass: '
    + existingData.class + '\nlevel: '
    + existingData.level + '\nguild: ' + existingData.guildID + '\nfaction: '
    + existingData.factionId);
    existingData.updateAttributes(payload).then((data) => {
      util.debug('Player Model - Update a Player - New Data', 'id: ' + data.id + '\nname: '
      + data.name + '\nrace: ' + data.race + '\nclass: '
      + data.class + '\nlevel: '
      + data.level + '\nguild: ' + data.guildID + '\nfaction: '
      + data.factionId);
      success(data);
    }).catch(err);
  }).catch(err);
};
