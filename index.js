"use strict";

// Required node modules
var _ = require("lodash").runInContext();

module.exports = _.mixin({
  isMatrix: require("./src/isMatrix.js"),
  transpose: require("./src/transpose.js")
});
