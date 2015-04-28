"use strict";

var trimmer = require("../src/string/trimmer");
var assert = require("chai").assert;

describe("Trimmer Module", function () {
    it("Should Trim Text String", function () {
        var expected = "This is a test";
        assert.equal(trimmer.Trim(" This is a test "), expected, "Passed: Trim");
        assert.equal(trimmer.TrimStart(" This is a test"), expected, "Passed: TrimStart");
        assert.equal(trimmer.TrimEnd("This is a test "), expected, "Passed: TrimEnd");
        assert.doesNotThrow(function () { trimmer.Trim(""); }, "Passed: Does not throw error");
        assert.doesNotThrow(function () { trimmer.TrimStart(""); }, "Passed: Does not throw error");
        assert.doesNotThrow(function () { trimmer.TrimEnd(""); }, "Passed: Does not throw error");
    });
    it("Trim Should Throw Error if not string", function () {
        assert.Throw(function () { trimmer.Trim(0); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.Trim(true); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.Trim({}); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.Trim([]); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.Trim(function () { }); }, Error, "Invalid Argument", "Passed: Throws Error");
    });
    it("TrimStart Should Throw Error if not string", function () {
        assert.Throw(function () { trimmer.TrimStart(0); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.TrimStart(true); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.TrimStart({}); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.TrimStart([]); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.TrimStart(function () { }); }, Error, "Invalid Argument", "Passed: Throws Error");
    });
    it("TrimEnd Should Throw Error if not string", function () {
        assert.Throw(function () { trimmer.TrimEnd(0); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.TrimEnd(true); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.TrimEnd({}); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.TrimEnd([]); }, Error, "Invalid Argument", "Passed: Throws Error");
        assert.Throw(function () { trimmer.TrimEnd(function () { }); }, Error, "Invalid Argument", "Passed: Throws Error");
    });
});
