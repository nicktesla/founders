'use strict'

angular.module('foundersApp')
  .controller 'AdminCtrl', ($scope, $http, $log) ->

    loadFounders = ->
      $http.get('/api/founders').success (result) ->
        if result.success
          $scope.founders = result.data
        else if result.error
          $log.debug "error when loading founders #{result.error}"

    $scope.createForm = 
      founderName: null
      startupName: null

    $scope.updateForm =
      startupName: null 
      companyName: null
      startYear: null
      endYear: null
    
    $scope.createFounder = ->
      packet = 
        createData:
          name: $scope.createForm.founderName
          foundedStartups: [$scope.createForm.startupName]

      $http.post('/api/founders', packet).success (result) ->
        if result.success
          $scope.createForm.founderName = null
          $scope.createForm.startupName = null
          loadFounders()
        else if result.error
            $log.debug "error when creating founder: #{result.error}"

    $scope.updateWorkExperience = (founderId) ->
      packet = 
        founderId: founderId
        newData:
          newStartup: $scope.updateForm.startupName
          workExperience: 
            companyName: $scope.updateForm.companyName
            startYear: $scope.updateForm.startYear
            endYear: $scope.updateForm.endYear

      $http.put('/api/founders/work', packet).success (result) ->
        if result.success
          loadFounders()
        else if result.error
          $log.debug "error when updating founder: #{result.error}"

    $scope.updateFoundedStartups = (founderId) ->
      packet = 
        founderId: founderId
        newData:
          newStartup: $scope.updateForm.startupName

      $http.put('/api/founders/startups', packet).success (result) ->
        if result.success
          loadFounders()
        else if result.error
          $log.debug "error when updating founder: #{result.error}"

    
    loadFounders()