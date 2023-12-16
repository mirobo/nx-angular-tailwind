const express = require('express');
const path = require('path');

const baseDir = path.join(__dirname, '../');
const app = express();
app.use(express.static(path.join(baseDir, 'dist/apps/demo')));
const exprServer = app.listen(4200, () => {
  const serverUrl = `http://localhost:${exprServer.address().port}`;
  console.log(`Express server listening on ${serverUrl}`);
});
