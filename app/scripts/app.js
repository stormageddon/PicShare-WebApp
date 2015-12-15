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
    'ngTouch',
    'bitly.generator'
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
  }).config(['bitlyProvider', function (bitlyProvider) {
    bitlyProvider.cfgBitly({
      login: 'mcaputo425',
      api: 'R_a1ff5e86067b4a7f8cd9ef21e64cb90d'
    });
  }]);
