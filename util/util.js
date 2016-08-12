exports.debug = (title, obj) => {
  const fs = require('fs');
  const seperator = '\n====================================\n';
  const output = seperator + title + seperator + '\n' + obj;
  if (process.env.DEBUG) {
    fs.appendFile('lib/logs/util.log', output, (err) => {
      if (err) throw err;
      console.log(output);
    })
  }
};
