"use strict";

var stringer = require("../src/string/stringer");
var assert = require("chai").assert;

describe("Stringer Module", function () {
    it("Should Format and Trim Text String", function () {
        var expected = "This is a test";
        assert.equal(stringer.Format("This is a {0}", "test"), expected, "Passed: Format");
        assert.equal(stringer.FormatTrim(" This is a {0} ", "test"), expected, "Passed: Format Trim");
        assert.equal(stringer.FormatTrimStart(" This is a {0} ", "test"), expected + " ", "Passed: Format Trim Start");
        assert.equal(stringer.FormatTrimEnd(" This is a {0} ", "test"), " " + expected, "Passed: Format Trim End");
    });
});