"use strict";

// Required node modules
var expect = require("chai").expect;

// Required files
var _ = require("../index.js");

describe("lodash.isMatrix", function () {
  it("should return false for an empty array", function () {
    var testArray = [];

    expect(_.isMatrix(testArray)).to.be.false;
  });

  it("should return true for a 1 by 1 matrix", function () {
    var testMatrix = [[1]];

    expect(_.isMatrix(testMatrix)).to.be.true;
  });

  it("should return true for an m by n matrix", function () {
    var testMatrix = [[1, 2, 3], [4, 5, 6]];

    expect(_.isMatrix(testMatrix)).to.be.true;
  });

  it("should return false for a non-matrix", function () {
    var testMatrix = [[1, 2], [2]];

    expect(_.isMatrix(testMatrix)).to.be.false;
  });
});
