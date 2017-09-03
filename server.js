'use strict';

const express = require('express');
const routes = require('./api/routes/routes.js');
let app = express();
let port = process.env.PORT || 3000;

routes.configure(app);
app.listen(port);

console.log('API server started on: ' + port);
