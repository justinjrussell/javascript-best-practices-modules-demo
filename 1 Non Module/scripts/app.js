/**
 * isArray(object)
 * Checks if argument is an array
 * 
 * @param {object} 
 * @returns {boolean}
 */
function isArray(o) {
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

/**
 * verify(arguments)
 * Verify argument are not an Array/Object/Function
 * 
 * @param {arguments}
 * @returns {boolean}
 */
function verify(args) {
    var valid = true;
    for (var i = 0; i < args.length; i++) {
        var item = args[i];
        if (isArray(item) || typeof item === "object" || typeof item === "function") {
            valid = false;
            continue;
        }
    }
    return valid;
}

/**
 * trim(string)
 * Trims both ends of a string
 * 
 * @param {string}
 * @returns {string}
 */
function trim(string) {
    if (typeof string !== "string") { error("Invalid Argument"); };
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
    if (typeof string !== "string") { error("Invalid Argument"); };
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
    if (typeof string !== "string") { error("Invalid Argument"); };
    if (String.prototype.trimRight) { return string.trimRight(); }
    return string.replace(/\s+$/, '');
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
    if (typeof formatString !== "string") { error("Format must be String"); }
    if (arguments.length === 1) { return formatString; }
    var objectArg = Array.prototype.slice.call(arguments).splice(1, arguments.length);
    if (!verify(objectArg)) { error("Invalid Arguments"); }

    var formatted = formatString;

    for (var i = 0, l = objectArg.length; i < l; i++) {
        formatted = formatted.replace("{" + i + "}", objectArg[i]);
    }
    return formatted;
}

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
    return trim(format.apply(null, arguments));
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
    return trimStart(format.apply(null, arguments));
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
    return trimEnd(format.apply(null, arguments));
}