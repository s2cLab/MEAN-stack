var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsCreate = function (req, res) {
    sendJSONresponse(res, 200, {"status" : "success"} );
 };

module.exports.locationListByDistance = function (req, res) { };
module.exports.locationsReadOne = function (req, res) { };
module.exports.locationsUpdateOne = function (req, res) { };
module.exports.locationsDeleteOne = function (req, res) { };