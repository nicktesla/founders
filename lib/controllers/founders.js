'use strict';

var mongoose = require('mongoose'),
    Founder = mongoose.model('Founder'),
    passport = require('passport');

// Create a founder
exports.create = function (req, res, next) {
  var newFounder = new Founder(req.body.createData);
  newFounder.save(function(err) {
    if (err) return res.json({success: false, error: err});
    return res.json({success: true,  data: newFounder});
  });
};

// Update a founder's work experience
exports.updateWorkExperience = function (req, res, next) {
  var founderId = req.body.founderId;
  var newData = req.body.newData;
  Founder.update({_id: founderId}, {$push: {workExperience: newData.workExperience}}, function(err, founder) {
    if (err) return res.json({success: false, error: err});
    return res.json({success: true,  data: founder});
  });
};

exports.updateFoundedStartups = function (req, res, next) {
  var founderId = req.body.founderId;
  var newData = req.body.newData;
  Founder.update({_id: founderId}, {$push: {foundedStartups: newData.newStartup}}, function(err, founder) {
    if (err) return res.json({success: false, error: err});
    return res.json({success: true,  data: founder});
  });
};

// Get all founders
exports.founders = function(req, res) {
  return Founder.find(function (err, founders) {
    if (!err) {
      return res.json({success: true, data: founders});
    } else {
      return res.send({success: false, error: err});
    }
  });
};