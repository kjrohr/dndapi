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
app.use('/api/v1', require('./routes/guilds.js')(express));
app.use('/api/v1', require('./routes/players.js')(express));
app.use('/api/v1', require('./routes/api.js')(express));

// Start the server
const server = app.listen(port, () => {
  // Says Server is running on port: 3000 on server start
  console.log('Server is running on port: ', port);
});

// Exports server out to what ever file may need it.
module.exports = server;
