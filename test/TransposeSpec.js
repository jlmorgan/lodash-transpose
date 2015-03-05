"use strict";

// Required node modules
var expect = require("chai").expect;

// Required files
var _ = require("../index.js");

describe("lodash.transpose", function () {
  it("should return the original array for an empty array", function () {
    var testArray = [];
    var expectedResults = [];

    expect(_.transpose(testArray)).to.eql(expectedResults);
  });

  it("should return the original array for a non-matrix", function () {
    var testArray = [[1, 2], [2]];
    var expectedResults = [[1, 2], [2]];

    expect(_.transpose(testArray)).to.eql(expectedResults);
  });

  it("should return the original array for 1 by 1 matrix", function () {
    var testArray = [[1]];
    var expectedResults = [[1]];

    expect(_.transpose(testArray)).to.eql(expectedResults);
  });

  it("should return an n by 1 for a 1 by n matrix", function () {
    var testArray = [[1, 2]];
    var expectedResults = [[1], [2]];

    expect(_.transpose(testArray)).to.eql(expectedResults);
  });

  it("should return an 1 by n for a n by 1 matrix", function () {
    var testArray = [[1], [2]];
    var expectedResults = [[1, 2]];

    expect(_.transpose(testArray)).to.eql(expectedResults);
  });

  it("should return an m by n matrix for an n by m matrix", function () {
    var testArray = [[1, 2, 3], [4, 5, 6]];
    var expectedResults = [[1, 4], [2, 5], [3, 6]];

    expect(_.transpose(testArray)).to.eql(expectedResults);
  });
});
