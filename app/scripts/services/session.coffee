'use strict'

angular.module('foundersApp')
  .factory 'Session', ($resource) ->
    $resource '/api/session/'
