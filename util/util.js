exports.debug = (title, obj) => {
  const fs = require('fs');

  const ts = new Date();
  const seperator = '\n====================================\n';
  const output = ts;
  if (process.env.DEBUG) {
    fs.appendFile('lib/logs/util.log', output, (err) => {
      if (err) throw err;
      console.log(output);
    })
  }
};
