"use strict";

var util = require("../src/util");
var assert = require("chai").assert;

describe("Util Module", function () {
    it("isArray", function () {
        assert.equal(util.isArray([]), true, "Passed: isArray = true");
        assert.equal(util.isArray(0), false, "Passed: isArray = false");
        assert.equal(util.isArray(true), false, "Passed: isArray = false");
        assert.equal(util.isArray({}), false, "Passed: isArray = false");
        assert.equal(util.isArray(function(){}), false, "Passed: isArray = false");
    });
    it("error", function () {
        assert.Throw(function () { util.error(""); } , Error, "", "Passed: Throws Error");
    });
});