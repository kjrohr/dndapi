// Makes an instance of db.js and sets it to variable db
const db = require('./db');
// Makes an instance of util.js and sets it to variable util
const util = require('../../lib/util');

// Exports the add function which references the sequelize create method.
exports.add = (payload, err, success) => {
  db.faction.create(payload).then(success).catch(err);
  util.debug('faction Model - Add a faction', 'name: ' + payload.name);
};

// Exports the all function which references the sequelize findAll method
exports.all = (err, success) => {
  db.faction.findAll().then(success).catch(err);
  util.debug('faction Model - Find all factions', success);
};

// Exports the one funciton which references the sequelize find method
exports.one = (payload, err, success) => {
  db.faction.find({
    where: {
      id: payload.id,
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then((data) => {
    // If debug environmental variable exists then this line will run.
    util.debug('Faction Model - Find a Faction', 'id: ' + data.id + '\nname: ' + data.name);
    success(data);
  }).catch(err);
};

// Exports remove which references the sequelize destroy method
exports.remove = (payload, err, success) => {
  db.faction.destroy({
    where: {
      id: payload.id,
    },
  }).then((data) => {
    // If debug environmental variable exists then this line will run.
    util.debug('faction Model - Delete a faction', 'Success?: ' + data);
    success(data);
  }).catch(err);
};

// Exports updates which references the sequelize find method
// then takes the existing Data and updates the attributes
exports.update = (payload, err, success) => {
  db.faction.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    // If debug environmental variable exists then this line will run.
    util.debug('Faction Model - Update a Faction - Old Data', 'id: ' + existingData.id
    + '\nname: ' + existingData.name);
    existingData.updateAttributes(payload).then((data) => {
      // If debug environmental variable exists then this line will run.
      util.debug('Faction Model - Update a Faction - New Data', 'id: ' + data.id
      + '\nname: ' + data.name);
      success(data);
    }).catch(err);
  }).catch(err);
};
