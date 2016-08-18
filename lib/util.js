// Exports the debug method of this file.
exports.debug = (title, obj) => {
  // Requires in the terminal-colors module.
  require('terminal-colors');

  // Requires and enables the filestream.
  const fs = require('fs');
  // Get's the the date and time when used.
  const ts = new Date();
  // A seperator for formatting.
  const seperator = '\n====================================\n';
  // This is formatted and colored output for the terimal
  const outputTerminal = seperator.grey + title.bold.yellow + seperator.grey + obj + '\n' + ts;
  // This is formatted output for a file
  const outputFile = seperator + title + seperator + obj + '\n' + ts;

  // If the DEBUG environmental variable exits
  if (process.env.DEBUG) {
    // Write to the util.log filestream
    fs.appendFile('logs/util.log', outputFile, (err) => {
      // If there is an error throw it
      if (err) throw err;
      // Display the output on terminal
      console.log(outputTerminal);
    });
  }
};
