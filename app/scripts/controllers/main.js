'use strict';

/**
 * @ngdoc function
 * @name picShareApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the picShareApp
 */
angular.module('picShareApp')
  .controller('MainCtrl', function ($scope, $location, $window, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var githubBase = 'http://github.com/stormageddon/';

    $scope.openGithub = function(repo) {
      $window.location = githubBase + repo;
    };

  });
