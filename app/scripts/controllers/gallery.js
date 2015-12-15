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
    $scope.imageid = $routeParams.imageid;
    console.log('Image id:', $routeParams.imageid);
  });
