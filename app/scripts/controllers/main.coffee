'use strict'

angular.module('foundersApp')
  .controller 'MainCtrl', ($scope, $http, $log) ->

    $scope.stats =
      workerPercent: null
      workerSerialPercent: null
      pureSerialPercent: null  

    computePercents = ->
      workers = _.filter($scope.founders, (founder) -> founder and founder.workExperience.length and founder.foundedStartups.length == 1)
      workerSerial = _.filter($scope.founders, (founder) -> founder and founder.workExperience.length and founder.foundedStartups.length >1)
      pureSerial = _.filter($scope.founders, (founder) -> founder and !founder.workExperience.length)

      if $scope.founders.length
        founderCount = $scope.founders.length
        workerPercent = (workers.length/founderCount)*100
        workerSerialPercent = (workerSerial.length/founderCount)*100
        pureSerialPercent = (pureSerial.length/founderCount)*100
        $scope.stats =
          workerPercent: workerPercent
          workerSerialPercent: workerSerialPercent
          pureSerialPercent: pureSerialPercent
    
    loadFounders = ->
      $http.get('/api/founders').success (result) ->
        if result.success
          $scope.founders = result.data
          computePercents()
        else if result.error
          $log.debug "error grabbing the founders: #{result.error}"

    loadFounders()