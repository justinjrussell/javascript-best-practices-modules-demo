/// <reference path="require.js" />
define(["util"], function (util) {
    var trim = function (string) {
        if (typeof string !== "string") { util.error("Invalid Argument"); };
        if (String.prototype.trim) return string.trim();
        return string.replace(/^\s+|\s+$/g, '');
    }

    var trimStart = function (string) {
        if (typeof string !== "string") { util.error("Invalid Argument"); };
        if (String.prototype.trimLeft) return string.trimLeft();
        return string.replace(/^\s+/, '');
    }

    var trimEnd = function (string) {
        if (typeof string !== "string") { util.error("Invalid Argument"); };
        if (String.prototype.trimRight) return string.trimRight();
        return string.replace(/\s+$/, '');
    }
    return {
        Trim: trim,
        TrimStart: trimStart,
        TrimEnd: trimEnd
    }
});