// Makes an instance of sequelize module, and sets it to the Sequelize variabele
const Sequelize = require('sequelize');

const util = require('../../lib/util');

// This file requires the dotenv.config module and method
require('dotenv').config();

// Makes a new instance of Sequelize and sets it to sequelize
// Takes data from .env file to set up the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// Defines user table, with name column
const player = sequelize.define('player', {
  name: {
    type: Sequelize.STRING,
  },
  faction: {
    type: Sequelize.STRING,
  },
  race: {
    type: Sequelize.STRING,
  },
  class: {
    type: Sequelize.STRING,
  },
  level: {
    type: Sequelize.INTEGER,
  },
});

// Defines app table, with name, description, and releaseDate columns
const guild = sequelize.define('guild', {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },

});

const faction = sequelize.define('faction', {
  name: {
    type: Sequelize.STRING,
  },
});


// User has many app relationship
guild.hasMany(player, {
  foreignKey: 'guildID',
});

faction.hasMany(guild, {
  foriegnKey: 'factionID',
});

// Syncs up to the mysql database
sequelize.sync();

if (sequelize.sync()) {
  util.debug('Database syncing', 'success');
} else {
  util.debug('Database syncing', 'failed');
}


// Exports sequelize as sequelize
exports.sequelize = sequelize;

// Exports user
exports.player = player;

// Exports app as app
exports.guild = guild;

exports.faction = faction;
