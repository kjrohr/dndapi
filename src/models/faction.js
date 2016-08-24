// Makes an instance of db.js and sets it to variable db
const db = require('./db');

// Exports the add function which references the sequelize create method.
exports.add = (payload, err, success) => {
  db.faction.create(payload).then(success).catch(err);
};

// Exports the all function which references the sequelize findAll method
exports.all = (err, success) => {
  db.faction.findAll().then(success).catch(err);
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
    existingData.updateAttributes(payload).then((data) => {
      success(data);
    }).catch(err);
  }).catch(err);
};
