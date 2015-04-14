﻿var util = (function () {
    var isArray = function (o) {
        return Object.prototype.toString.call(o) === "[object Array]";
    }

    var error = function (msg) {
        throw new Error(msg);
    }

    return {
        isArray: isArray,
        error: error
    }
})();