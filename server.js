const path = require('path');
const express = require('express');
// require('dotenv').config();
const routes = require('./routes');
const session = require('express-session');
const publicDirectoryPath = path.join(__dirname, '../public')

const app = express();
const PORT = 3001;

app.use(express.static(publicDirectoryPath));
app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });