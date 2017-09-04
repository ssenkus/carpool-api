'use strict';

const tripsRepo = require('../dataAccess/tripRepository.js');
const log = require('../log.js');
const Trip = require('../models/trip.js');


exports.configure = (app) => {
    app.get('/trip/:tripId', getTripById);
    app.get('/trip', getAllTrips);
    app.post('/trip', createTrip);
    app.delete('/trip/:tripId', deleteTrip);
};

// TODO: all: add validation to params, limit what comes in & out
function getAllTrips(req, res, next) {
    tripsRepo.getAllTrips((err, trips) => {
        if (err) return next(err);
        res.json(trips);
    });
}

function getTripById(req, res, next) {
    tripsRepo.getById(req.params.tripId, (err, trip) => {
        if (err) return next(err);
        res.json(trip);
    });
}

function createTrip(req, res, next) {
    tripsRepo.create(new Trip(req.body.destination), (err, trip) => {
        if (err) return next(err);
        res.json(trip);
    });
}

function deleteTrip(req, res, next) {
    tripsRepo.delete(req.params.tripId, (err) => {
        if (err) return next(err);
        res.json({
            tripId: req.params.tripId,
            success: true
        })
    })
}
