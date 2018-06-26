const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

// create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

// done! we export it so we can start the site in start.js
module.exports = app;