'use strict';

let User = require('../models/user.js');

exports.configure = (app) => {

    app.get('/user/:userId', getUserById);

    app.get('/user', getAllUsers);

};


function getAllUsers(req, res, next) {
    // TODO: placeholder for listing all users
    let user1 = new User('TEST USER 1');
    console.log('USER: ' + user1.name);
    let user2 = new User('TEST USER 2');
    console.log('USER: ' + user2.name);
    res.json([user1, user2]);
}

function getUserById(req, res, next) {
    // TODO: placeholder for retrieving user
    let user = new User('TEST USER' + req.params.userId);
    res.json(user);

}