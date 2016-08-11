// Makes an instance of db.js and sets it to variable db
const db = require('./db.js');

// Exports the add function which references the sequelize create method.
exports.add = (payload, err, success) => {
  db.guild.create(payload).then(success).catch(err);
}

// Exports the all function which references the sequelize findAll method
exports.all = (err, success) => {
  db.guild.findAll().then(success).catch(err);
}

// Exports the one funciton which references the sequelize find method
exports.one = (payload, err, success) => {
  db.guild.find({
    where: {
      id: payload.id
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
}

// Exports remove which references the sequelize destroy method
exports.remove = (payload, err, success) => {
  db.guild.destroy({
    where: {
      id: payload.id,
    }
  }).then(success).catch(err);
}

// Exports updates which references the sequelize find method
// then takes the existing Data and updates the attributes
exports.update = (payload, err, success) => {
    db.guild.find({
      where: {
        id: payload.id,
      }
    }).then((existingData) => {
      existingData.updateAttributes(payload).then(success).catch(err);
    }).catch(err);
}
