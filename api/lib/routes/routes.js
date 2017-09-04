'use strict';
const userRoutes = require('./userRoutes.js');
const tripRoutes = require('./tripRoutes.js');
const log = require('../log.js');

exports.configure =  (app) => {

    app.get('/', (req, res, next) => {
        res.json({
            success: true
        });
    });

    userRoutes.configure(app);
    tripRoutes.configure(app);
};