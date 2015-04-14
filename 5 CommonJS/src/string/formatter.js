'use strict';

var util = require("../util");

/**
 * verify(arguments)
 * Verify arguments are not an Array/Object/Function
 * 
 * @param {arguments}
 * @returns {boolean}
 */
function verify(args) {
    var valid = true;
    for (var i = 0; i < args.length; i++) {
        var item = args[i];
        if (util.isArray(item) || typeof item === "object" || typeof item === "function") {
            valid = false;
            continue;
        }
    }
    return valid;
}

/**
 * format(formatString,arguments)
 * Replaces each format item in a specified string with the 
 * text equivalent of a corresponding object's value
 * 
 * @param {string}
 * @param {string/number/boolean} 
 * @returns {string}
 */
function format(formatString) {
    if (typeof formatString !== "string") { util.error("Format must be String"); }
    if (arguments.length === 1) { return formatString; }
    var objectArg = Array.prototype.slice.call(arguments).splice(1, arguments.length);
    if (!verify(objectArg)) { util.error("Invalid Arguments"); }

    var formatted = formatString;

    for (var i = 0, l = objectArg.length; i < l; i++) {
        formatted = formatted.replace("{" + i + "}", objectArg[i]);
    }
    return formatted;
}

var api = {
    Format: format
};

module.exports = api;