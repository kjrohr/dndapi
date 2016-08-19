// Makes an instance of faction.js and sets it to variable faction
const faction = require('../models/faction');
// Makes an instance of util.js and sets it to variable util.
const util = require('../../lib/util');
// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  const router = express.Router();

  // Read All
  router.get('/factions', (req, res) => {
    faction.all((err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - GET ALL - /api/v1/factions', err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read One
  router.get('/factions/:id', (req, res) => {
    const factionData = { id: req.params.id };
    faction.one(factionData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - GET ONE- /api/v1/factions/:id', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - GET ONE - /api/v1/factions/:id', 'id: ' + data.id
      + '\nname: ' + data.name);
    });
  });

  // Delete
  router.delete('/factions/:id', (req, res) => {
    const factionData = { id: req.params.id };
    faction.remove(factionData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - DELETE ONE - /api/v1/factions/:id', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - DELETE ONE - /api/v1/factions/:id', 'Success?' + data);
    });
  });

  // Create
  router.post('/factions', (req, res) => {
    faction.add(req.body, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - POST - /api/v1/factions', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - POST - /api/v1/factions', 'id: ' + data.id
      + '\nname: ' + data.name);
    });
  });

  // Read Guilds
  // got to the route of a specificed player faction
  router.get('/factions/:id/guilds', (req, res) => {
    const factionData = { id: req.params.id };
    faction.one(factionData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - GET ONE - /api/v1/factions/:id', err);
    }, (data) => {
      // By putting .factions when you go to the specific route it will only show the factions.
      res.status(200).json(data.guilds);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - GET ONE - /api/v1/factions/:id', 'id: ' + data.id
      + '\nname: ' + data.name);
    });
  });

  // Read all players of a faction
  router.get('/factions/:id/players', (req, res) => {
    const factionData = { id: req.params.id };
    faction.one(factionData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - GET PLAYERS - /api/v1/factions/:id/players', err);
    }, (data) => {
      // By putting .factions when you go to the specific route it will only show the factions.
      res.status(200).json(data.players);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - GET PLAYERS - /api/v1/factions/:id/players', data.players);
    });
  });

  // Update
  router.post('/factions/:id', (req, res) => {
    const factionData = { id: req.params.id };
    factionData.id = req.params.id;
    faction.update(factionData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - POST UPDATE FACTION - /api/v1/factions/:id', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - POST UPDATE FACTION - /api/v1/factions/:id', 'id: ' + data.id
      + '\nname: ' + data.name);
    });
  });

// Returns router to the file that would call it
  return router;
};
