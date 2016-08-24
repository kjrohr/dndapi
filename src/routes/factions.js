// Makes an instance of faction.js and sets it to variable faction
const faction = require('../models/faction');
// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  const router = express.Router();

  // Read All
  router.get('/factions', (req, res) => {
    faction.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read One
  router.get('/factions/:id', (req, res) => {
    const factionData = { id: req.params.id };
    faction.one(factionData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete
  router.delete('/factions/:id', (req, res) => {
    const factionData = { id: req.params.id };
    faction.remove(factionData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Create
  router.post('/factions', (req, res) => {
    faction.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read Guilds
  // got to the route of a specificed player faction
  router.get('/factions/:id/guilds', (req, res) => {
    const factionData = { id: req.params.id };
    faction.one(factionData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // By putting .factions when you go to the specific route it will only show the factions.
      res.status(200).json(data.guilds);
    });
  });

  // Read all players of a faction
  router.get('/factions/:id/players', (req, res) => {
    const factionData = { id: req.params.id };
    faction.one(factionData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // By putting .factions when you go to the specific route it will only show the factions.
      res.status(200).json(data.players);
    });
  });

  // Update
  router.post('/factions/:id', (req, res) => {
    const factionData = { id: req.params.id };
    factionData.id = req.params.id;
    faction.update(factionData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Returns router to the file that would call it
  return router;
};
