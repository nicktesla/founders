'use strict';

var mongoose = require('mongoose'),
  Founder = mongoose.model('Founder');
/**
 * Populate database with sample application data
 */

// add founders
/**
Founder.count({}, function(err, count) {
  if(count == 0) {
    Founder.create({
      name : 'Sergey Brin',
      foundedStartups : ['Google'],
      workExperience: []
    }, 
    {
      name : 'Reid Hoffman',
      foundedStartups : ['LinkedIn'],
      workExperience: [
        {
          companyName: 'Apple',
          startYear: 1999,
          endYear: 2000
        },
        {
          companyName: 'Paypal', 
          startYear: 2000,
          endYear: 2003
        }]
    },
    function() {
        console.log('finished populating founders');
      }
    );
  }
  else {
    console.log("found: ", count, " users and so not bootstrapping");
  }
})
**/