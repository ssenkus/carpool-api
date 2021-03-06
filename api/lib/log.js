var config = require('../config.js');
var moment = require('moment');

var VERBOSE = 1;
var DEBUG = 2;
var INFO = 3;
var WARN = 4;
var ERROR = 5;

exports.error = function (message, err) {
    if (err && err.stack) {
        message += "\n" + err.stack;
    } else if (err) {
        message += "\n" + JSON.stringify(err);
    }
    log(ERROR, message);
};

exports.warn = function (message) {
    log(WARN, message);
};

exports.info = function (message) {
    log(INFO, message);
};

exports.debug = function (message) {
    log(DEBUG, message);
};

exports.verbose = function (message) {
    log(VERBOSE, message);
};

exports.blankLine = function () {
    console.log();
}

function log(level, message) {
    var timestamp = moment().format('MM-DD HH:mm:ss,SSS ');
    var tag;

    switch (level) {
        case VERBOSE:
            tag = '[V] ';
            break;
        case DEBUG:
            tag = '[D] ';
            break;
        case INFO:
            tag = '[I] ';
            break;
        case WARN:
            tag = '[W] ';
            break;
        case ERROR:
            tag = '[E] ';
            break;
        default:
            throw new Error('Invalid log level encountered: ' + level);
    }
    console.log(timestamp + tag + message);
}