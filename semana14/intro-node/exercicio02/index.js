const fs = require('fs');

const listName = process.argv[2];
const newTask = process.argv[3];

fs.appendFile(listName, newTask + '\n', (err) => {
  if (err) throw err;
});
