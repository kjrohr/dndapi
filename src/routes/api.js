// Starts the export for this file.
module.exports = (express) => {
  // Makes an instance of express.Router() and assigns it to router
  let router = express.Router();

  // /api/ route will return { hello: 'world'}
  router.get('/', (req,res) => {
    res.json({ hello: 'world',
    description: 'Hey',
   });
  });

  // /api/status route will return { healty: 'true'}
  router.get('/status', (req,res) => {
    res.json({ healty: true });
  });

  // Returns router to the server file which requested it
  return router;
};
