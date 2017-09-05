'use strict';

const usersRepo = require('../dataAccess/usersRepository.js');
const log = require('../log.js');
let User = require('./user.js');


exports.configure = (app) => {
    app.get('/users/:userId', getUserById);
    app.get('/users', getAllUsers);
    app.post('/users', createUser);
    app.delete('/users/:userId', deleteUser);
};

// TODO: all: add validation to params, limit what comes in & out
function getAllUsers(req, res, next) {
    usersRepo.getAllUsers((err, users) => {
        if (err) return next(err);
        res.json(users);
    });
}

function getUserById(req, res, next) {
    usersRepo.getById(req.params.userId, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
}

function createUser(req, res, next) {
    usersRepo.create(new User(req.body.name), (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
}

function deleteUser(req, res, next) {
    usersRepo.delete(req.params.userId, (err) => {
        if (err) return next(err);
        res.json({
            userId: req.params.userId,
            success: true
        })
    })
}
