'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./api/lib/routes/routes.js');
const db = require('./api/lib/dataAccess/mongoClientWrapper.js');
const log = require('./api/lib/log.js');
let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}))

routes.configure(app);

app.listen(port);

log.info('API server started on: ' + port);
log.info('Initializing web process');

db.initialize(() => {
    log.info('Initialized MongoDB!');
});


