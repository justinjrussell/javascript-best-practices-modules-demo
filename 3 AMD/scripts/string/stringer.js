/// <reference path="require.js" />
define(["util", "string/trimmer"], function (util, trimmer) {

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

    function formatTrim() {
        return trimmer.Trim(format.apply(null, arguments));
    }

    function formatTrimStart() {
        return trimmer.TrimStart(format.apply(null, arguments));
    }

    function formatTrimEnd() {
        return trimmer.TrimEnd(format.apply(null, arguments));
    }

    return {
        Format: format,
        FormatTrim: formatTrim,
        FormatTrimStart: formatTrimStart,
        FormatTrimEnd: formatTrimEnd,
    }
});