// Makes an instance of db.js and sets it to variable db
// WARNING: Not having the .js after db broke it once, check again
const db = require('./db');
const util = require('../../lib/util');

// Exports the add function which references the sequelize create method.
exports.add = (payload, err, success) => {
  db.faction.create(payload).then(success).catch(err);
  util.debug('faction Model - Add a faction', payload.name);
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
  }).then(success).catch(err);
  util.debug('faction Model - Find a faction', 'id: ' + payload.id);
};

// Exports remove which references the sequelize destroy method
exports.remove = (payload, err, success) => {
  db.faction.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug('faction Model - Delete a faction', 'id: ' + payload.id);
};

// Exports updates which references the sequelize find method
// then takes the existing Data and updates the attributes
exports.update = (payload, err, success) => {
  db.faction.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.debug('faction Model - Update a faction', 'id: ' + payload.id);
};
