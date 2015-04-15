'use strict';

/**
 * isArray(object)
 * Checks if argument is an array
 * 
 * @param {object} 
 * @returns {boolean}
 */
function isArray(o) {
    if (Array.isArray) return Array.isArray(o);
    return Object.prototype.toString.call(o) === "[object Array]";
}

/**
 * error(message)
 * Throws Error with message
 * 
 * @param {string} Message
 * @throws {Error}
 */
function error(msg) {
    throw new Error(msg);
}

var api = {
    isArray: isArray,
    error: error
};

module.exports = api;