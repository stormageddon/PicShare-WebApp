'use strict';

/**
 * @ngdoc function
 * @name picShareApp.controller:GalleryController
 * @description
 * # GalleryController
 * Controller of the picShareApp
 */
angular.module('picShareApp')
  .controller('GalleryController', function ($scope, $routeParams) {
    console.log('cloudmine:', cloudmine);
    $scope.imageid = $routeParams.imageid;

    var ws = new cloudmine.WebService({
      appid: '933cd5ae80cfc140244a4158c5558db3',
      apikey: 'c6ee6dcbf7e8435ab90edc90fc6c704e',
      apiroot: 'https://api.secure.cloudmine.me'
    })

    $scope.imageData = {}

    ws.get($scope.imageid).on('success', function(data){
      console.log("Got:", data);
      $scope.imageData.createdAt = data[$scope.imageid]["__created__"]
      $scope.$apply()
      console.log('created:', $scope.imageData.createdAt);
    }).on('error', function(err) {
      console.log("error:", err);
    });


    console.log('Image id:', $routeParams.imageid);
  });
