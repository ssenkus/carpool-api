'use strict';

const db = require('./mongoClientWrapper.js');
const ObjectID = require('mongodb').ObjectID;
const _ = require('underscore');
const util = require('./repositoryUtil.js');

exports.create = function (trip, done) {
    db.trips().insertOne(trip, function (err, result) {
        if (err) return done(err);
        if (result.insertedCount != 1) {
            return done(null, new Error('Failed to create trip'));
        }
        util.convertFromObjectId(trip);
        return done(null, trip);
    });
};

exports.getById = function (tripId, done) {
    db.trips().findOne({_id: new ObjectID(tripId)}, function (err, doc) {
        if (err) return done(err);
        var trip = doc;
        return done(null, trip);
    });
};

exports.getAllTrips = function (done) {
    db.trips().find().toArray(function (err, docs) {
        if (err) return done(err);

        var trips = [];
        for (var i = 0; i < docs.length; i++) {
            trips.push((docs[i]));
        }
        return done(null, trips);
    });
};

// TODO: add route and use this method
// exports.update = function (user, done) {
//     util.convertToObjectId(user);
//     db.users().update(
//         {_id: user._id},
//         user,
//         function (err) {
//             util.convertFromObjectId(user);
//             return done(err);
//         }
//     );
// };

exports.delete = function (tripId, done) {
    db.trips().removeOne({_id: new ObjectID(userId)}, function (err, result) {
        if (err) return done(err);
        if (result.deletedCount != 1) {
            return done(new Error('Failed to delete trip with id: ' + tripId));
        }
        return done();
    });
};