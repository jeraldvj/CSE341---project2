const dbConfig = require('../config/dbconfig.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.specialty = require('./specialty.js')(mongoose);
db.user = require('./user.js')(mongoose);

module.exports = db;