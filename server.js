const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const indexHTML = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

require('./build/dev-server')(app);

app.use('/dist', express.static(path.resolve(__dirname, './dist')));

app.get('*', (req, res) => {
  res.end(indexHTML);
});

app.listen(port, () => {
  console.log('Server up')
});
