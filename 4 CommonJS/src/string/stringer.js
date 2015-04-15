"use strict";

var trimmer = require("./trimmer");
var formatter = require("./formatter");

/**
 * formatTrim(formatString,arguments)
 * Replaces each format item in a specified string with the
 * text equivalent of a corresponding object's value and
 * trims both ends of the returned string
 * 
 * @param {string}
 * @param {string/number/boolean} 
 * @returns {string}
 */
function formatTrim() {
    return trimmer.Trim(formatter.Format.apply(null, arguments));
}

/**
 * formatTrimStart(formatString,arguments)
 * Replaces each format item in a specified string with the
 * text equivalent of a corresponding object's value and
 * trims the start(left) side of the returned string
 * 
 * @param {string}
 * @param {string/number/boolean} 
 * @returns {string}
 */
function formatTrimStart() {
    return trimmer.TrimStart(formatter.Format.apply(null, arguments));
}

/**
 * formatTrimEnd(formatString,arguments)
 * Replaces each format item in a specified string with the
 * text equivalent of a corresponding object's value and
 * trims the end(right) side of the returned string
 * 
 * @param {string}
 * @param {string/number/boolean} 
 * @returns {string}
 */
function formatTrimEnd() {
    return trimmer.TrimEnd(formatter.Format.apply(null, arguments));
}

var api = {
    Format: formatter.Format,
    FormatTrim: formatTrim,
    FormatTrimStart: formatTrimStart,
    FormatTrimEnd: formatTrimEnd
};

module.exports = api;