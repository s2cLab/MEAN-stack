var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.reviewsCreate = function (req, res) { };
module.exports.reviewsReadOne = function (req, res) { };
module.exports.reviewsUpdateOne = function (req, res) { };
module.exports.reviewsDeleteOne = function (req, res) { };