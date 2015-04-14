var stringer = {
    verify: function (args) {
        var valid = true;
        for (var i = 0; i < args.length; i++) {
            var item = args[i];
            if (util.isArray(item) || typeof item === "object" || typeof item === "function") {
                valid = false;
                continue;
            }
        }
        return valid;
    },
    format: function (formatString) {
        if (typeof formatString !== "string") { util.error("Format must be String"); }
        if (arguments.length === 1) { return formatString; }
        var objectArg = Array.prototype.slice.call(arguments).splice(1, arguments.length);
        if (!stringer.verify(objectArg)) { util.error("Invalid Arguments"); }

        var formatted = formatString;

        for (var i = 0, l = objectArg.length; i < l; i++) {
            formatted = formatted.replace("{" + i + "}", objectArg[i]);
        }
        return formatted;
    },
    formatTrim: function () {
        return trimmer.Trim(stringer.format.apply(null, arguments));
    },

    formatTrimStart: function () {
        return trimmer.TrimStart(stringer.format.apply(null, arguments));
    },

    formatTrimEnd: function () {
        return trimmer.TrimEnd(stringer.format.apply(null, arguments));
    }
};

