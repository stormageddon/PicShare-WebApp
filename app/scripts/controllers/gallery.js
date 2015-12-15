'use strict';

/**
 * @ngdoc function
 * @name picShareApp.controller:GalleryController
 * @description
 * # GalleryController
 * Controller of the picShareApp
 */
angular.module('picShareApp')
  .controller('GalleryController', function ($scope, $routeParams, $window) {
    console.log('cloudmine:', cloudmine);

    $scope.appData = {
      id: '933cd5ae80cfc140244a4158c5558db3',
      apikey: 'c6ee6dcbf7e8435ab90edc90fc6c704e',
      apiroot: 'https://api.secure.cloudmine.me'
    }

    $scope.imageid = $routeParams.imageid;

    $scope.imageData = {
      id: $routeParams.imageid,
      url: $scope.appData.apiroot + "/v1/app/" + $scope.appData.id + "/binary/" + $scope.imageid + "?apikey=" + $scope.appData.apikey
    }

    console.log('url:', $scope.imageData.url);

    var ws = new cloudmine.WebService({
      appid: $scope.appData.id,
      apikey: $scope.appData.apikey,
      apiroot: $scope.appData.apiroot
    })

    ws.get($scope.imageid).on('success', function(data){
      console.log("Got:", data);
      $scope.imageData.createdAt = data[$scope.imageid]["__created__"]
      $scope.$apply()
      console.log('created:', $scope.imageData.createdAt);
    }).on('error', function(err) {
      console.log("error:", err);
    });


    console.log('Image id:', $routeParams.imageid);

    $scope.openImage = function() {
      $window.location = $scope.imageData.url
    }

  });
