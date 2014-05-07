'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    founders = require('./controllers/founders'),
    middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/founders')
    .get(founders.founders)
    .post(founders.create);

  app.route('/api/founders/work')
    .put(founders.updateWorkExperience);

  app.route('/api/founders/startups')
    .put(founders.updateFoundedStartups);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};