"use strict";

// Required node modules
var _ = require("lodash");

module.exports = _.mixin(_, {
  isMatrix: require("./src/isMatrix.js"),
  transpose: require("./src/transpose.js")
});
