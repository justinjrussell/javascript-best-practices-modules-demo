var stringer = (function (t, u) {
   
    var verify = function (args) {
        var valid = true;
        for (var i = 0; i < args.length; i++) {
            var item = args[i];
            if (u.isArray(item) || typeof item === "object" || typeof item === "function") {
                valid = false;
                continue;
            }
        }
        return valid;
    }

    var format = function (formatString) {
        if (typeof formatString !== "string") { u.error("Format must be String"); }
        if (arguments.length === 1) { return formatString; }
        var objectArg = Array.prototype.slice.call(arguments).splice(1, arguments.length);
        if (!verify(objectArg)) { u.error("Invalid Arguments"); }

        var formatted = formatString;

        for (var i = 0, l = objectArg.length; i < l; i++) {
            formatted = formatted.replace("{" + i + "}", objectArg[i]);
        }
        return formatted;
    }

    function formatTrim() {
        return t.Trim(format.apply(null, arguments));
    }

    function formatTrimStart() {
        return t.TrimStart(format.apply(null, arguments));
    }

    function formatTrimEnd() {
        return t.TrimEnd(format.apply(null, arguments));
    }

    return {
        Format: format,
        FormatTrim: formatTrim,
        FormatTrimStart: formatTrimStart,
        FormatTrimEnd: formatTrimEnd,
    }
})(trimmer, util);