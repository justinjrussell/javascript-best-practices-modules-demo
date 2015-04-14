/// <reference path="require.js" />
define([], function () {
    return {
        isArray: function (o) {
            return Object.prototype.toString.call(o) === "[object Array]";
        },
        error: function (msg) {
            throw new Error(msg);
        },
    }
});