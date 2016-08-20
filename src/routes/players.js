const player = require('../models/player');
const util = require('dndapi_test');
// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  const router = express.Router();

  // Read All
  router.get('/players', (req, res) => {
    player.all((err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - GET ALL - /api/v1/players', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - GET ALL - /api/v1/players', data);
    });
  });

  // Read One
  router.get('/players/:id', (req, res) => {
    const playerData = { id: req.params.id };
    player.one(playerData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - GET ONE - /api/v1/players/:id', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - GET ONE - /api/v1/players/:id', 'id: ' + data.id + '\nname: '
      + data.name + '\nrace:' + data.race + '\nclass: ' + data.class + '\nlevel: '
      + data.level + '\nguild: ' + data.guildID + '\nfaction: ' + data.factionId);
    });
  });

  // Delete
  router.delete('/players/:id', (req, res) => {
    const playerData = { id: req.params.id };
    player.remove(playerData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - DELETE - /api/v1/players/:id', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - DELETE - /api/v1/players/:id', 'Success?: ' + data);
    });
  });

  // Create
  router.post('/players', (req, res) => {
    player.add(req.body, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - POST - /players', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - POST - /players', 'id: ' + data.id + '\nname: '
      + data.name + '\nrace:' + data.race + '\nclass: ' + data.class + '\nlevel: '
      + data.level + '\nguild: ' + data.guildID + '\nfaction: ' + data.factionId);
    });
  });

  // Update
  router.post('/players/:id', (req, res) => {
    const playerData = req.body;
    playerData.id = req.params.id;
    player.update(playerData, (err) => {
      res.status(500).json(err);
      // If debug environmental variable exists then this line will run.
      util.debug('ERROR - POST UPDATE - /api/v1/players/:id', err);
    }, (data) => {
      res.status(200).json(data);
      // If debug environmental variable exists then this line will run.
      util.debug('SUCCESS - POST UPDATE - /api/v1/players/:id', 'id: ' + data.id + '\nname: '
      + data.name + '\nrace:' + data.race + '\nclass: ' + data.class + '\nlevel: '
      + data.level + '\nguild: ' + data.guildID + '\nfaction: ' + data.factionId);
    });
  });

// Returns router to the file that would call it
  return router;
};
