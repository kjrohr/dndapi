const guild = require('../models/guild');
const util = require('../../lib/util');
// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  const router = express.Router();

  // Read All
  router.get('/guilds', (req, res) => {
    guild.all((err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - GET ALL - /api/v1/guilds', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - GET ALL - /api/v1/guilds', data);
    });
  });

  // Read One
  router.get('/guilds/:id', (req, res) => {
    const guildData = { id: req.params.id };
    guild.one(guildData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - GET ONE - /api/v1/guilds/:id', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - GET ONE - /api/v1/guilds/:id', 'id: ' + data.id + '\nname: '
      + data.name + '\ndescription: ' + data.description + '\nfaction: ' + data.factionId);
    });
  });

  // Delete
  router.delete('/guilds/:id', (req, res) => {
    const guildData = { id: req.params.id };
    guild.remove(guildData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - DELETE - /api/v1/guilds/:id', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - DELETE - /api/v1/guilds/:id', 'Success?: ' + data);
    });
  });

  // Create
  router.post('/guilds', (req, res) => {
    guild.add(req.body, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - POST - /api/v1/guilds', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - POST - /api/v1/guilds', 'id: ' + data.id + '\nname: '
      + data.name + '\ndescription: ' + data.description + '\nfaction: ' + data.factionId);
    });
  });

  // Read One
  // got to the route of a specificed player guild
  router.get('/guilds/:id/players', (req, res) => {
    const guildData = { id: req.params.id };
    guild.one(guildData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - GET PLAYERS FROM GUILD - /api/guilds/:id/players', err);
    }, (data) => {
      // By putting .guilds when you go to the specific route it will only show the guilds.
      res.status(200).json(data.players);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - GET PLAYERS FROM GUILD - /api/guilds/:id/players', data.players);
    });
  });

  // Update
  router.post('/guilds/:id', (req, res) => {
    const guildData = req.body;
    guildData.id = req.params.id;
    guild.update(guildData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - POST UPDATE - /api/v1/guilds/:id', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - POST UPDATE - /api/v1/guilds/:id', 'id: ' + data.id + '\nname: '
      + data.name + '\ndescription: ' + data.description + '\nfaction: ' + data.factionId);
    });
  });

// Returns router to the file that would call it
  return router;
};
