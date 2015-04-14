var trimmer = {
    Trim: function (string) {
        if (typeof string !== "string") { error("Invalid Argument"); };
        if (String.prototype.trim) { return string.trim(); }
        return string.replace(/^\s+|\s+$/g, '');
    },
    TrimStart: function (string) {
        if (typeof string !== "string") { error("Invalid Argument"); };
        if (String.prototype.trimLeft) { return string.trimLeft(); }
        return string.replace(/^\s+/, '');
    },
    TrimEnd: function (string) {
        if (typeof string !== "string") { error("Invalid Argument"); };
        if (String.prototype.trimRight) { return string.trimRight(); }
        return string.replace(/\s+$/, '');
    }
};