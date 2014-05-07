'use strict'

angular.module('foundersApp')
  .controller 'MainCtrl', ($scope, $http) ->
    $http.get('/api/founders').success (result) ->
      if result.success
        $scope.founders = result.data
      else if result.error
        $log.debug "error grabbing the founders: #{result.error}"