// Imports module express.
const express = require('express');
// Imports of a module body-parser.
const bodyParser = require('body-parser');
// Makes an instance of express called app.
const app = express();
// Sets a constant of 3000 for the port we're working on.
const port = 3000;

// Tells app to use the bodyParser.json() method
app.use(bodyParser.json());

// The following three lines are requiring in my route files
app.use('/api/v1', require('./routes/guilds')(express));
app.use('/api/v1', require('./routes/players')(express));
app.use('/api/v1', require('./routes/api')(express));
app.use('/api/v1', require('./routes/factions')(express));

// Start the server
const server = app.listen(port, () => {
  // Says Server is running on port: 3000 on server start
});

// Exports server out to what ever file may need it.
module.exports = server;
