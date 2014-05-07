'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Founder Schema
 */
var FounderSchema = new Schema({
  name: String,
  birthYear: Number, // dont restrict this as we want to document people from antiquity as well :)
  schools: Array,
  major: String,
  nationality: String,
  foundedStartups: { 
    type: Array,
    default: []
  },
  workExperience: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Founder', FounderSchema);
