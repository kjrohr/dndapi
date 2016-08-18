// Makes an instance of db.js and sets it to variable db
const db = require('./db');
// Makes an instance of the util.js and sets it to the variable util
const util = require('../../lib/util');

// Exports the add function which references the sequelize create method.
exports.add = (payload, err, success) => {
  db.guild.create(payload).then(success).catch(err);
  // If debug environmental variable exists then this line will run.
  util.debug('Guild Model - Add a Guild', 'name: ' + payload.name + '\ndescription: '
  + payload.description
  + '\nfaction: ' + payload.factionId);
};

// Exports the all function which references the sequelize findAll method
exports.all = (err, success) => {
  db.guild.findAll().then(success).catch(err);
  // If debug environmental variable exists then this line will run.
  util.debug('Guild Model - Find all Guilds', success);
};

// Exports the one funciton which references the sequelize find method
exports.one = (payload, err, success) => {
  db.guild.find({
    where: {
      id: payload.id,
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then((data) => {
    // TODO's possibly add in foreach for players
    // If debug environmental variable exists then this line will run.
    util.debug('Guild Model - Find One Guild', 'id: ' + data.id + '\nname: '
    + data.name + '\nfaction: ' + data.factionId);
    success(data);
  }).catch(err);
};

// Exports remove which references the sequelize destroy method
exports.remove = (payload, err, success) => {
  db.guild.destroy({
    where: {
      id: payload.id,
    },
  }).then((data) => {
    // If debug environmental variable exists then this line will run.
    util.debug('Guild Model - Delete a Guild', 'Success?: ' + data);
    success(data);
  }).catch(err);
};

// Exports updates which references the sequelize find method
// then takes the existing Data and updates the attributes
exports.update = (payload, err, success) => {
  db.guild.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    // If debug environmental variable exists then this line will run.
    util.debug('Guild Model - Update a Guild - Old Data', 'id: ' + existingData.id + '\nname: '
    + existingData.name + '\ndescription: ' + existingData.description + '\nfaction: '
    + existingData.factionId);
    existingData.updateAttributes(payload).then((data) => {
      // If debug environmental variable exists then this line will run.
      util.debug('Guild Model - Update a Guild - New Data', 'id: ' + data.id + '\nname: '
      + data.name + '\ndescription: ' + data.description + '\nfaction: '
      + data.factionId);
      success(data);
    }).catch(err);
  }).catch(err);
  // If debug environmental variable exists then this line will run.
  util.debug('Guild Model - Update a Guild', 'id: ' + payload.id);
};
