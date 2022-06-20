const path = require('path');
const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const sequelize = require('./config/config');
const session = require('express-session');

const app = express();
const PORT = 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
  secret: 'Super Secret Secret',
  cookie: { },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.static("public"));
app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });