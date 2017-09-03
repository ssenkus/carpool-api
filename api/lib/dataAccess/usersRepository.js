'use strict';

var db = require('./mongoClientWrapper.js');
var ObjectID = require('mongodb').ObjectID;
var _ = require('underscore');
var util = require('./repositoryUtil.js');
// var User = require('../models/user.js');

exports.create = function (user, done) {
    db.users().insertOne(user, function (err, result) {
        if (err) return done(err);
        if (result.insertedCount != 1) {
            return done(null, new Error('Failed to create user'));
        }
        util.convertFromObjectId(user);
        return done(null, user);
    });
};

exports.getById = function (userId, done) {
    db.users().findOne({_id: new ObjectID(userId)}, function (err, doc) {
        if (err) return done(err);
        var user = doc;
        return done(null, user);
    });
};

exports.findUsers = function(email, firstName, lastName, showAnonymous, done) {

    db.users().find({}).toArray(function (err, docs) {
        if (err) return done(err);

        var users = [];
        for (var i = 0; i < docs.length; i++) {
            users.push((docs[i]));
        }
        return done(null, users);
    });
};

exports.getAllUsers = function (done) {
    db.users().find().toArray(function (err, docs) {
        if (err) return done(err);

        var users = [];
        for (var i = 0; i < docs.length; i++) {
            users.push((docs[i]));
        }
        return done(null, users);
    });
};

exports.update = function (user, done) {
    util.convertToObjectId(user);
    db.users().update(
        {_id: user._id},
        user,
        function (err) {
            util.convertFromObjectId(user);
            return done(err);
        }
    );
};

exports.delete = function (userId, done) {
    db.users().removeOne({_id: new ObjectID(userId)}, function (err, result) {
        if (err) return done(err);
        if (result.deletedCount != 1) {
            return done(new Error('Failed to delete user with id: ' + userId));
        }
        return done();
    });
};