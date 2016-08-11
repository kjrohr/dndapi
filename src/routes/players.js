const player = require('../models/player.js');

// Starts the export for this file
module.exports = (express) => {
  // Makes a new instance of express.Router() and assigns it to router.
  let router = express.Router();

  // Read All
  router.get('/players', (req,res) => {
    console.log('finding all');
    player.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read All
  router.get('/players/:id', (req,res) => {
    req.body.id = req.params.id;
    player.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Delete
  router.delete('/players/:id', (req,res) => {
    req.body.id = req.params.id;
    player.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Create
  router.post('/players', (req,res) => {
    console.log('create player hit');
    player.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // Update
  router.post('/players/:id', (req,res) => {
    req.body.id = req.params.id;
    player.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });





// Returns router to the file that would call it
  return router;
};
