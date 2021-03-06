const guild = require('../models/guild');
// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  const router = express.Router();

  // Read All
  router.get('/guilds', (req, res) => {
    guild.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read One
  router.get('/guilds/:id', (req, res) => {
    const guildData = { id: req.params.id };
    guild.one(guildData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete
  router.delete('/guilds/:id', (req, res) => {
    const guildData = { id: req.params.id };
    guild.remove(guildData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Create
  router.post('/guilds', (req, res) => {
    guild.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read One
  // got to the route of a specificed player guild
  router.get('/guilds/:id/players', (req, res) => {
    const guildData = { id: req.params.id };
    guild.one(guildData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      // By putting .guilds when you go to the specific route it will only show the guilds.
      res.status(200).json(data.players);
    });
  });

  // Update
  router.post('/guilds/:id', (req, res) => {
    const guildData = req.body;
    guildData.id = req.params.id;
    guild.update(guildData, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// Returns router to the file that would call it
  return router;
};
