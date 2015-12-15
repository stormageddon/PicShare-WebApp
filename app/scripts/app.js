'use strict';

/**
 * @ngdoc overview
 * @name picShareApp
 * @description
 * # picShareApp
 *
 * Main module of the application.
 */
angular
  .module('picShareApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/gallery/:imageid', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
