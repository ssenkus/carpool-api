var _ = require('underscore');
var ObjectID = require('mongodb').ObjectID;

exports.convertToObjectId = function (obj) {
    obj._id = new ObjectID(obj.id);
    delete obj.id;
};

exports.convertFromObjectId = function (obj) {
    obj.id = obj._id.toHexString();
    delete obj._id;
};