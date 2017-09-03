'use strict';

exports.configure =  (app) => {

    app.get('/', () => {
        console.log('Test route');
    });

    require('./userRoutes.js').configure(app);

};