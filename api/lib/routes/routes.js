'use strict';
const userRoutes = require('./userRoutes.js');
const log = require('../log.js');

exports.configure =  (app) => {

    app.get('/', (req, res, next) => {
        log.debug('Test route');
        next();
    });

    userRoutes.configure(app);

};