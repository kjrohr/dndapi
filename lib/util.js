exports.debug = (title, obj) => {
  require('terminal-colors');

  const fs = require('fs');

  const ts = new Date();
  const seperator = '\n====================================\n';
  const outputTerminal = seperator.grey + title.bold.yellow + seperator.grey + obj +'\n' + ts;
  const outputFile = seperator + title + seperator + obj + '\n' + ts
  if (process.env.DEBUG) {
    fs.appendFile('logs/util.log', outputFile, (err) => {
      if (err) throw err;
      console.log(outputTerminal);
    })
  }
};
