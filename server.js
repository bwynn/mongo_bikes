// packages
// =============================================================================
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

// config
// =============================================================================
var db = require('./config/db');
var port = process.env.PORT || 8080;
mongoose.connect(db.db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('dev'));

// set static files path
app.use(express.static(__dirname + '/public'));

// routes
// =============================================================================
require('./routes/routes')(app);

// server
// =============================================================================
app.listen(port);

console.log("Server running on port " + port);

exports = module.exports = app;
