"use strict";

var formatter = require("../src/string/formatter");
var assert = require("chai").assert;

describe("Formatter Module", function () {
    it("Should Format Text String", function () {
        var expected = "This is a test";
        assert.equal(formatter.Format("This is a test"), expected, "Passed: Format");
        assert.equal(formatter.Format("{0} is a test", "This"), expected, "Passed: Format");
        assert.equal(formatter.Format("{0} {1} a test", "This", "is"), expected, "Passed: Format");
        assert.equal(formatter.Format("{0} {1} {2} test", "This", "is", "a"), expected, "Passed: Format");
        assert.equal(formatter.Format("{0} {1} {2} {3}", "This", "is", "a", "test"), expected, "Passed: Format");
    });
    it("Should Throw Errors", function () {
        assert.Throw(function () { formatter.Format(); }, Error, "Format must be String", "Passed: Throws Error");
        assert.Throw(function () { formatter.Format(0); }, Error, "Format must be String", "Passed: Throws Error");
        assert.Throw(function () { formatter.Format("", []); }, Error, "Invalid Arguments", "Passed: Throws Error");
        assert.Throw(function () { formatter.Format("", {}); }, Error, "Invalid Arguments", "Passed: Throws Error");
        assert.Throw(function () { formatter.Format("", function () { }); }, Error, "Invalid Arguments", "Passed: Throws Error");
    });
});