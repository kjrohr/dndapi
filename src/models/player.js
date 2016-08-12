// // Makes an instance of db.js and sets it to variable db
const db = require('./db.js');

// Exports the add function which references the sequelize create method.
exports.add = (payload, err, success) => {
  db.player.create(payload).then(success).catch(err);
  util.debug('Player Model - Add a Player', payload.name + '\n' + payload.description);
}

// Exports the all function which references the sequelize findAll method
exports.all = (err, success) => {
  db.player.findAll().then(success).catch(err);
  util.debug('Player Model - Find all Players', success);
}

// Exports the one funciton which references the sequelize find method
exports.one = (payload, err, success) => {
  db.player.find({
    where: {
      id: payload.id
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('Player Model - Find a Player', 'id: ' + payload.id);
}

// Exports remove which references the sequelize destroy method
exports.remove = (payload, err, success) => {
  db.player.destroy({
    where: {
      id: payload.id,
    }
  }).then(success).catch(err);
  util.debug('Player Model - Delete a Player', 'id: ' + payload.id);
}

// Exports updates which references the sequelize find method
// then takes the existing Data and updates the attributes
exports.update = (payload, err, success) => {
    db.player.find({
      where: {
        id: payload.id,
      }
    }).then((existingData) => {
      existingData.updateAttributes(payload).then(success).catch(err);
    }).catch(err);
    util.debug('Player Model - Update a Player', 'id: ' + payload.id);
}
