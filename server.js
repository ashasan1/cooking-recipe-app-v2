const path = require('path');
const express = require('express');
// require('dotenv').config();
// const routes = require('./routes');
const session = require('express-session');

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });