'use strict';

var util = require("../util");

/**
 * trim(string)
 * Trims both ends of a string
 * 
 * @param {string}
 * @returns {string}
 */
function trim(string) {
    if (typeof string !== "string") { util.error("Invalid Argument"); }
    if (String.prototype.trim) { return string.trim(); }
    return string.replace(/^\s+|\s+$/g, '');
}

/**
 * trimStart(string)
 * Trims start(left) of a string
 * 
 * @param {string}
 * @returns {string}
 */
function trimStart(string) {
    if (typeof string !== "string") { util.error("Invalid Argument"); }
    if (String.prototype.trimLeft) { return string.trimLeft(); }
    return string.replace(/^\s+/, '');
}

/**
 * trimEnd(string)
 * Trims end(right) of a string
 * 
 * @param {string}
 * @returns {string}
 */
function trimEnd(string) {
    if (typeof string !== "string") { util.error("Invalid Argument"); }
    if (String.prototype.trimRight) { return string.trimRight(); }
    return string.replace(/\s+$/, '');
}

var api = {
    Trim: trim,
    TrimStart: trimStart,
    TrimEnd: trimEnd
};

module.exports = api;
