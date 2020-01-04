'use strict';
require('dotenv');
const app = require('./config/server.config');
require('./config/database.config');

//Routes
require('./routes/upload.routes')(app);
