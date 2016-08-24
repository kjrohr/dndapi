const player = require('../models/player');
// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  const router = express.Router();

  // Read All
  router.get('/players', (req, res) => {
    player.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read One
  router.get('/players/:id', (req, res) => {
    const playerData = { id: req.params.id };
    player.one(playerData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete
  router.delete('/players/:id', (req, res) => {
    const playerData = { id: req.params.id };
    player.remove(playerData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Create
  router.post('/players', (req, res) => {
    player.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update
  router.post('/players/:id', (req, res) => {
    const playerData = req.body;
    playerData.id = req.params.id;
    player.update(playerData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Returns router to the file that would call it
  return router;
};
